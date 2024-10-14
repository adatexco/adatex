import { ENV, authFetch, couponFormatter } from "@/utils";
import moment from "moment";

export class Coupon {
  static async getSampleAndTotalCoupons() {
    try {
      const filters = `filters[expiration][$gte]=${moment()
        .format("yyyy-mm-dd")
        .toString()}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COUPONS}?${filters}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data.map((d) => couponFormatter(d));
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COUPONS}`;
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
      return couponFormatter(result.data);
    } catch (error) {
      throw error;
    }
  }

  static async getUserCoupons(userId) {
    try {
      const filters = `filters[user][id][$eq]=${userId}&[used][$eq]=false`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COUPONS}?${filters}`;
      const response = await authFetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data.map((c) => couponFormatter(c));
    } catch (error) {
      throw error;
    }
  }

  static async getValidByCode(code) {
    try {
      const filters = `filters[code][$eq]=${code}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.COUPONS}?${filters}`;
      const response = await authFetch(url);
      const result = await response.json();
      console.log(result);
      if (response.status !== 200) throw result;
      if (result.data.length > 0) {
        const coupon = couponFormatter(result.data[0]);
        if (coupon.used || moment(coupon.expiration).isBefore(moment())) {
          throw new Error("El código expiró");
        }
        return coupon;
      } else {
        throw new Error(
          "El que estás utilizando no existe, intenta nuevamente y revisa que lo estés escribiendo correctamente"
        );
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
