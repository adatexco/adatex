import { numberFormatter } from "@/utils";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

export function CartSummary({
  className = "",
  products = [],
  children,
  blackText = false,
}) {
  const [deliveryAmount, setDeliveryAmount] = useState("Gratis");
  const total = products.reduce((acc, cur) => acc + cur.total, 0);
  const router = useRouter();
  return (
    <div className={`${className} `}>
      <div className="flex flex-col border-b pb-3 text-secondary">
        <div
          className={`flex justify-between  ${
            blackText ? "text-secondary" : "text-white"
          }`}
        >
          <span>Subtotal</span>
          <span>{numberFormatter(total, "$")}</span>
        </div>
        <div
          className={`flex justify-between  ${
            blackText ? "text-secondary" : "text-white"
          }`}
        >
          <span>Envío</span>
          <span>{deliveryAmount}</span>
        </div>
      </div>
      <div
        className={`flex justify-between py-3  ${
          blackText ? "text-secondary" : "text-white"
        }`}
      >
        <span className="font-bold">Total</span>
        <span className="font-bold">{numberFormatter(total, "$")}</span>
      </div>
      {children}
    </div>
  );
}
