import { ENV, authFetch } from "@/utils";

export class User {
  static async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
      const response = await authFetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(userId, data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.USERS}/${userId}`;
      const params = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
