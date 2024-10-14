import { ENV, contentFormatter } from "@/utils";

export class Content {
  static async get() {
    try {
      const populate = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CONTENT}?${populate}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return contentFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }
}
