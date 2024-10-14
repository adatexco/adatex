import { OrdersContext } from "@/contexts";
import { useContext } from "react";

export const useOrders = () => useContext(OrdersContext);
