import { Product } from "@/api";
import {
  CartProducts,
  CartSummary,
  MainLayout,
  PageHeader,
} from "@/components";
import { useAuth, useCart } from "@/hooks";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@material-tailwind/react";

export default function CartPage() {
  const { user } = useAuth();
  const { cart } = useCart();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const data = [];
        for await (const item of cart.products) {
          const response = await Product.getById(item.id, item.inventoryId);
          data.push({
            ...response,
            quantity: item.quantity,
            variant: response.inventory.find((i) => i.id === item.inventoryId),
            isSample: item.isSample,
            price: item.isSample ? 0 : response.price,
            total: (item.isSample ? 0 : response.price) * item.quantity,
          });
        }
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  return (
    <MainLayout user={user}>
      <PageHeader
        hideBreadcrumbs
        noMargin
        title={
          <div className="flex flex-row  justify-center align-middle gap-4">
            <ShoppingBagIcon className="w-10 h-10" />
            <div>Carrito</div>
          </div>
        }
        className="lg:h-48 h-32"
      />
      {products.length > 0 ? (
        <div className="py-4">
          <div className="grid grid-cols-12 min-h-[500px]">
            <div className="container col-span-12  lg:col-span-8 xl:col-span-6 xl:p-10  ">
              <h3 className="font-bold text-secondary lg:flex hidden">
                Productos
              </h3>
              <CartProducts products={products} editable={true} />
            </div>
            <div className="lg:container col-span-12  lg:col-span-4 xl:col-span-6  ">
              <div className="lg-max:container lg-max:py-10 xl:p-10">
                <CartSummary products={products} blackText>
                  <Button onClick={() => router.push("/check-out")} fullWidth>
                    Ir al Checkout
                  </Button>
                </CartSummary>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full container flex flex-col justify-center align-middle lg:p-24 p-10  gap-4">
          <h4 className="text-center lg:text-4xl text-xl font-bold">
            El carrito está vacío
          </h4>
          <p className="text-center lg:text-3xl text-base">
            ¡Agrega al carrito los productos que más te gusten!
          </p>
        </div>
      )}
    </MainLayout>
  );
}
