import React, { useEffect, useState } from "react";
import {
  Empty,
  MainLayout,
  OrderCollapse,
  OrdersList,
  TabMenu,
  UserInfo,
} from "@/components";
import { useAuth } from "@/hooks";
import { Tab, TabPanel } from "@material-tailwind/react";
import { Order } from "@/api";

export default function ProfilePage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const getUserOrders = async () => {
    if (user) {
      try {
        const userOrders = await Order.getUserOrders(user.id);
        setOrders(userOrders);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <MainLayout user={user}>
      <TabMenu>
        <div className="lg:container">
          <TabPanel value={"order"} className="w-full h-full">
            {orders.map((order) => (
              <OrdersList order={order} key={order.id} />
            ))}
            {orders.length === 0 && (
              <Empty
                title={"No tienes ordenes creadas"}
                content="Has tu primera orden! Explora nuestros productos y pide las muestras que necesites"
              />
            )}
          </TabPanel>
          <TabPanel value={"profile"}>
            <UserInfo />
          </TabPanel>
        </div>
      </TabMenu>
      <div className="container grid-cols-12 gap-10 hidden lg:grid min-h-[500px]">
        <div className="col-span-6">
          <h3 className="font-bold text-2xl text-secondary my-4">Ordendes</h3>
          {orders.map((order) => (
            <OrdersList order={order} key={order.id} />
          ))}
          {orders.length === 0 && (
            <Empty
              title={"No tienes ordenes creadas"}
              content="Has tu primera orden! Explora nuestros productos y pide las muestras que necesites"
            />
          )}
        </div>
        <div className="col-span-6">
          <h3 className="font-bold text-2xl text-secondary my-4">Usuario</h3>
          <UserInfo />
        </div>
      </div>
    </MainLayout>
  );
}
