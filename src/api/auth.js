import { ENV, authFetch } from "@/utils";

export class Auth {
  static async register(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async login(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async sendResetPasswordEmail(email) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.FORGOT_PASSWORD}`;
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
        }),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async resetPassword(password, passwordConfirmation, code) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.RESET_PASSWORD}`;
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          password,
          passwordConfirmation,
        }),
      };
      const response = await authFetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
