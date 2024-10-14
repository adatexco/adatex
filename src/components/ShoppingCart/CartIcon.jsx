import React, { useEffect, useState } from "react";
import { Badge, IconButton } from "@material-tailwind/react";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { useCart, useOrders } from "@/hooks";
import { useRouter } from "next/router";

export function CartIcon({ largeScreen = true }) {
  const { currentOrder } = useOrders();
  const { total } = useCart();
  const [invisible, setInvisible] = useState(true);
  const router = useRouter();

  const handleBadge = () => {
    if (currentOrder) {
      return currentOrder.products.length;
    }
    return null;
  };

  useEffect(() => {
    setInvisible(total === 0);
  }, [total]);

  return (
    <div className="flex">
      <Badge content={total} invisible={invisible} withBorder={largeScreen}>
        <IconButton
          variant={largeScreen ? "outlined" : "text"}
          size={largeScreen ? null : "lg"}
          className="hover:border-primary text-secondary"
          onClick={() => router.push("/cart")}
        >
          <ShoppingBagIcon
            className={`${
              largeScreen ? "h-6 w-6" : "h-7 w-7 stroke-2"
            } hover:text-primary text-secondary`}
          />
        </IconButton>
      </Badge>
    </div>
  );
}

{
  /**
   * 
   *         <Card className="w-full h-full p-4 shadow-xl shadow-blue-gray-900/5">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <h3>Carrito</h3>
          </CardHeader>
          <CardBody className="p-0">
            <table className="w-full table-auto text-left">
              <thead>
                <CartItemHead />
              </thead>
              <tbody>
                <CartItem />
                <CartItem />
                <CartItem />
              </tbody>
            </table>
          </CardBody>
        </Card>
   */
}
