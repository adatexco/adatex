import { ENV } from "./constants";

export const getImageUrl = (url) => {
  if (process.env.NODE_ENV === "development") {
    return `${ENV.SERVER_HOST}${url}`;
  }
  return url;
};
