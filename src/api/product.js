import { ENV, productFormatter } from "@/utils";

export class Product {
  static async getAll() {
    try {
      const populate =
        "populate[0]=inventories&populate[1]=inventories.images&populate[2]=inventories.variant&populate[3]=categories&populate[4]=tags&populate[5]=cover&populate[6]=images&populate[7]=inventories.productInventory";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${populate}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      const products = result.data.map((r) => productFormatter(r));
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async getFeaturedProducts() {
    try {
      const filters = "filters[featured][$eq]=true";
      const populate =
        "populate[0]=inventories&populate[1]=inventories.images&populate[2]=inventories.variant&populate[3]=categories&populate[4]=tags&populate[5]=cover&populate[6]=images";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${filters}?${populate}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      const products = result.data.map((r) => productFormatter(r));
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async getBySlug(slug) {
    try {
      const filters = `filters[slug][$eq]=${slug}`;
      const populate =
        "populate[0]=inventories&populate[1]=inventories.images&populate[2]=inventories.variant&populate[3]=categories&populate[4]=tags&populate[5]=cover&populate[6]=images&populate[7]=inventories.productInventory";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${filters}&${populate}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      const products = result.data.map((r) => productFormatter(r));
      return products[0];
    } catch (error) {
      throw error;
    }
  }

  static async getById(id, inventoryId) {
    try {
      const populate = `populate[0]=inventories&populate[1]=inventories.images&populate[2]=inventories.variant&populate[3]=categories&populate[4]=tags&populate[5]=cover&populate[6]=images&populate[7]=inventories.productInventory`;
      const filters = `filters[id][$eq]=${id}&filters[inventories][id][$eq]=${inventoryId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}?${filters}&${populate}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      const products = result.data.map((r) => productFormatter(r));
      return products[0];
    } catch (error) {
      throw error;
    }
  }
}
