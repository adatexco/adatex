import React from "react";
import { CartProducts, CartSummary } from "../ShoppingCart";
import { Button } from "@material-tailwind/react";
import { useLoading } from "@/hooks";

export function CheckoutCartSummary(props) {
  const [loading, setLoading] = useLoading();
  const {
    products = [],
    blackText = false,
    currentAddress,
    currentPaymentDetail,
    CVC,
    getWompiCheckout,
  } = props;

  const disableButton = () =>
    !currentAddress || !currentPaymentDetail || CVC.length < 4 ? true : false;

  return (
    <div className="container">
      <div className="flex justify-between">
        <h3 className="text-secondary font-semibold border-b w-full">
          Carrito
        </h3>
      </div>
      <div>
        <CartProducts products={products} hideTitle />
      </div>
      <div>
        <div className="md:mt-3">
          <CartSummary products={products} blackText={blackText}>
            <div className="w-full flex">
              <Button
                className="bg-secondary"
                fullWidth
                onClick={async () => getWompiCheckout()}
                loading={loading}
              >
                Comprar
              </Button>
            </div>
          </CartSummary>
        </div>
      </div>
    </div>
  );
}
