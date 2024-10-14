import { ENV, headerFormatter } from "@/utils";

export class Header {
  static async get() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.HEADER}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return headerFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }
}
