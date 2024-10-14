import { Token } from "@/api";

export async function authFetch(url, params) {
  const token = Token.getToken();

  const logout = () => {
    Token.removeToken();
    window.location.replace("/");
  };

  if (!token) {
    logout();
  } else {
    if (Token.hasExpired(token)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await fetch(url, paramsTemp);
      } catch (error) {
        return error;
      }
    }
  }
}
