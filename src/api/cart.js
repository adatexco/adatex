import { ENV, authFetch } from "@/utils";
import { forEach } from "lodash";

export class Cart {
  static addProduct(productId, inventoryId, quantity, isSample) {
    const cart = this.get();
    const productIndex = cart.products.findIndex(
      (product) =>
        product.inventoryId === inventoryId && product.isSample === isSample
    );
    if (productIndex < 0) {
      cart.products.push({
        id: productId,
        inventoryId,
        quantity: isSample ? 1 : quantity,
        isSample: isSample,
      });
    } else {
      cart.products[productIndex].quantity = isSample ? 1 : quantity;
    }

    localStorage.setItem(ENV.CART, JSON.stringify(cart));
  }

  static async addCoupon(coupon) {
    const cart = JSON.parse(localStorage.getItem(ENV.CART));
    const couponIndex = cart.coupons.findIndex((c) => c.id === coupon.id);
    const cartCoupon = {
      id: coupon.id,
      code: coupon.code,
      type: coupon.type,
    };
    if (couponIndex < 0) {
      cart.coupons.push(cartCoupon);
    } else {
      cart.coupons[couponIndex] = cartCoupon;
    }

    localStorage.setItem(ENV.CART, JSON.stringify(cart));
  }

  static get() {
    const response = localStorage.getItem(ENV.CART);
    if (!response) {
      return {
        products: [],
        coupons: [],
      };
    } else {
      return JSON.parse(response);
    }
  }

  static count() {
    const cart = this.get();
    return cart.products.length;
  }

  static total() {
    const cart = this.get();
    return 100000;
  }

  static changeQuantity(productId, quantity, isSample = false) {
    const cart = this.get();
    const productIndex = cart.products.findIndex(
      (p) => p.inventoryId === productId && p.isSample === isSample
    );
    if (isSample) {
      cart.products[productIndex].quantity = 1;
    } else {
      cart.products[productIndex].quantity = quantity;
    }
    localStorage.setItem(ENV.CART, JSON.stringify(cart));
  }

  static deleteProduct(productId, isSample) {
    const cart = this.get();
    const filteredProducts = cart.products.filter(
      (p) => !(p.inventoryId === productId && p.isSample === isSample)
    );
    cart.products = filteredProducts;
    localStorage.setItem(ENV.CART, JSON.stringify(cart));
  }

  static deleteCoupon(couponId) {
    const cart = this.get();
    const filteredCoupons = cart.coupons.filter((c) => c.id !== couponId);
    cart.coupons = filteredCoupons;
    localStorage.setItem(ENV.CART, JSON.stringify(cart));
  }

  static deleteAll() {
    localStorage.removeItem(ENV.CART);
  }

  static async purchase(amount) {
    const transactionId = "sk8-438k4-xmxm392-sn2m";
    const transactionInfo = `${transactionId}${amount * 100}COP${
      ENV.WOMPI_INTEGRITY_KEY
    }`;
    const encondedText = new TextEncoder().encode(transactionInfo);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encondedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  static async checkPaymentStatus(reference) {}
}
