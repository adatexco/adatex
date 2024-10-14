import { ENV } from "@/utils";
import { jwtDecode } from "jwt-decode";

export class Token {
  static setToken(token) {
    localStorage.setItem(ENV.TOKEN, token);
  }

  static getToken() {
    return localStorage.getItem(ENV.TOKEN);
  }

  static removeToken() {
    localStorage.removeItem(ENV.TOKEN);
  }

  static hasExpired(token) {
    const tokenDecode = jwtDecode(token);
    const expireDate = tokenDecode.exp * 1000;
    const currentDate = new Date().getTime();
    if (currentDate > expireDate) {
      return true;
    }
    return false;
  }
}
