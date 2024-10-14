import { ENV, messageFormatter } from "@/utils";

export class Message {
  static async create(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.MESSAGES}`;
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return messageFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }

  static async sendMessage(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.SEND_MESSAGE}`;
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
}
