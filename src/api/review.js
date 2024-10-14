import { ENV, reviewFormatter } from "@/utils";

export class Review {
  static async getAllByProductId(productId) {
    try {
      const filters = `filters[product][id][$eq]=${productId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REVIEWS}?${filters}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data.map((r) => reviewFormatter(r));
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REVIEWS}`;
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return reviewFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }
}
