import { ENV, categoryFormatter } from "@/utils";

export class Category {
  static async getAll() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORIES}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      const categories = result.data.map((r) => categoryFormatter(r));
      return categories;
    } catch (error) {
      throw error;
    }
  }

  static async getBySlug(slug) {
    try {
      const filter = `filters[slug][$eq]=${slug}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORIES}&${filter}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      const categories = result.data.map((r) => categoryFormatter(r));
      return categories[0];
    } catch (error) {
      throw error;
    }
  }
}
