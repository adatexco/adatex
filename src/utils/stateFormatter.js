import { ENV } from "./constants";

export const stateFormatter = (state) => {
  switch (state) {
    case ENV.ORDER_STATES.CONFIRMED:
      return "Confirmado";
    case ENV.ORDER_STATES.DELIVERED:
      return "Entregado";
    case ENV.ORDER_STATES.PENDING:
      return "Pendiente";
    default:
      return "Pendiente";
  }
};
