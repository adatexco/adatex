const { ENV, authFetch, addressFormatter } = require("@/utils");

export class Address {
  static async getUserAddresses(userId) {
    try {
      const filters = `filters[user][id][$eq]=${userId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}?${filters}`;
      const response = await authFetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data.map((a) => addressFormatter(a));
    } catch (error) {
      throw error;
    }
  }

  static async addAddress(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}`;
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await authFetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return addressFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }
}
