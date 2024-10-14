import { Order } from "@/api/order";
import { createContext, useState } from "react";

export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);

  const newOrder = async ({ addressShipping, products = [], user }) => {
    const response = await Order.createOrder({
      data: {
        addressShipping,
        products,
        user,
        state: "pending",
      },
    });
    setCurrentOrder(response.date);
    setOrders([...orders, response.data]);
  };

  const modifyOrder = async (order, data) => {
    try {
      if (order.state === "pending") {
        Object.keys(data).forEach((key) => {
          order[key] = data[key];
        });
        if (order.id === currentOrder.id) {
          setCurrentOrder(order);
        }
        setOrders(orders.map((o) => (o.id === order.id ? order : o)));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = async (product) => {
    try {
      if (currentOrder && currentOrder.state === "pending") {
        setCurrentOrder({ ...currentOrder.products, product });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const data = {
    currentOrder,
    setCurrentOrder,
    modifyOrder,
    newOrder,
    orders,
    setOrders,
    newOrder,
    modifyOrder,
  };

  return (
    <OrdersContext.Provider value={data}>{children}</OrdersContext.Provider>
  );
}
