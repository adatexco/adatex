import { shippingFormatter, ENV } from "@/utils";

export class Shipping {
  static async get() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.SHIPPING}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return shippingFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }
}
