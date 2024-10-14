import { ENV, authFetch, paymentDetailFormatter } from "@/utils";

export class PaymentDetail {
  static async getUserPaymentDetails(userId) {
    try {
      const filters = `filters[user][id][$eq]=${userId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENTDETAILS}?${filters}`;
      const response = await authFetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data.map((p) => paymentDetailFormatter(p));
    } catch (error) {
      throw error;
    }
  }

  static async addPaymentDetail(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENTDETAILS}`;
      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const response = await authFetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return paymentDetailFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }
}
