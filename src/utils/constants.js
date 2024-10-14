export const ENV = {
  CLIENTHOST:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.cately.co",
  SERVER_HOST:
    process.env.NODE_ENV === "development"
      ? "http://localhost:1337"
      : "https://admin.cately.co" /*"http://192.168.68.113:1337"*/,
  API_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:1337/api"
      : "https://cately-server.up.railway.app/api" /*"http://192.168.68.113:1337/api"*/,
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/local/register",
      LOGIN: "auth/local",
      USERS: "users",
      RESET_PASSWORD: "auth/reset-password",
      FORGOT_PASSWORD: "auth/forgot-password",
    },
    USERS_ME: "users/me",
    PRODUCTS: "products",
    CATEGORIES: "categories?sort=order&populate=cover",
    ORDERS: "orders",
    UPDATE_PAYMENT_STATUS: "update-payment-status",
    ADDRESSES: "addresses",
    PAYMENTDETAILS: "payment-details",
    HEADER: "header",
    CONTENT: "content",
    REVIEWS: "reviews",
    MESSAGES: "messages",
    SEND_MESSAGE: "send-message",
    COUPONS: "coupons",
    SHIPPING: "shipping",
  },
  TOKEN: "TOKEN",
  CART: "CART",
  WOMPI_PUBLIC_KEY: "pub_test_parDMP73vOygzp3BNgaRQNAbrCryaDJW",
  WOMPI_INTEGRITY_KEY: "test_integrity_iJgCkEWA3i2bUn0KD747W6nnrjo0n8b7",
  PAYMENT_STATUS: {
    APPROVED: "APPROVED",
    DECLINED: "DECLINED",
    PENDING: "PENDING",
    ERROR: "ERROR",
  },
  ORDER_STATES: {
    PENDING: "pending",
    CONFIRMED: "confirmed",
    DELIVERED: "delivered",
  },
  COUPON_TYPES: {
    sample: "Sample",
    product: "Product",
    total: "Total",
  },
};
