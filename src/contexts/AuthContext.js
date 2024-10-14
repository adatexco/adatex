import { Token, User } from "@/api";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const token = Token.getToken();
      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (Token.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token) => {
    try {
      Token.setToken(token);
      const response = await User.getMe();
      setUser(response);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const logout = () => {
    Token.removeToken();
    setToken(null);
    setUser(null);
  };

  const updateUser = (key, value) => {
    setUser({ ...user, [key]: value });
  };
  const data = {
    accessToken: token,
    user,
    setUser,
    login,
    logout,
    updateUser,
  };
  const { children } = props;

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
