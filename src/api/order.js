import { ENV, authFetch, orderFormatter } from "@/utils";

export class Order {
  static async getUserOrders(userId) {
    try {
      const filters = `filters[user][id][$eq]=${userId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDERS}?${filters}`;
      const response = await authFetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data.map((r) => orderFormatter(r));
    } catch (error) {
      throw error;
    }
  }

  static async createOrder(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDERS}`;
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = data.data?.user
        ? await authFetch(url, params)
        : await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return orderFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }

  static async updateOrder(id, data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDERS}/${id}`;
      const params = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = data.data?.user
        ? await authFetch(url, params)
        : await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return orderFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }

  static async getByReferencePayment(reference) {
    try {
      const filters = `filters[reference][$eq]=${reference}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDERS}?${filters}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return orderFormatter(result.data[0]);
    } catch (error) {
      throw error;
    }
  }
}
