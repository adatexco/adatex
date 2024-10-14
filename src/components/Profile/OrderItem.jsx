import { getImageUrl, numberFormatter } from "@/utils";
import { Chip, ListItem } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React from "react";

export function OrderItem({ product }) {
  const router = useRouter();
  return (
    <ListItem
      className="flex flex-col m-0 p-0 md:p-2"
      onClick={() => router.push(`/products`)}
    >
      <div className="flex flex-row  gap-3 p-2 md:p-4 !font-alegreya w-full border-b bg-gray-100  rounded-t">
        <img
          src={getImageUrl(product.images[0].url)}
          alt={product.images[0].alt}
          className="w-11 sm:w-20 md:w-24 lg:w-28 aspect-square rounded"
        />
        <div className="flex flex-row justify-between  w-full">
          <div className="text-xs sm:text-base md:text-lg  flex flex-col">
            <span className="font-bold">{product.name}</span>
            <div className="flex flex-row gap-2">
              <span>{product.variant.color.name}</span>
            </div>
            <span>{numberFormatter(parseFloat(product.price), "$")}</span>
          </div>
          <div className="text-xs sm:text-base md:text-lg  flex flex-col align-middle   justify-center">
            <span className="font-bold text-center lg:text-left">Cantidad</span>
            <span className="text-center">{product.quantity}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full text-xs sm:text-base md:text-lg   !font-alegreya gap-3 p-2 md:p-4 bg-gray-100 rounded-b">
        <span className="text-xs sm:text-base md:text-lg   !font-alegreya">
          <span>Total:</span> {numberFormatter(parseFloat(product.total), "$")}
        </span>
        {product.variant.isSample ? (
          <span className="border rounded-full text-white px-2 py-[1px] font-bold  bg-blue-gray-700 text-xs sm:text-base md:text-lg">
            Muestra
          </span>
        ) : (
          <span>
            Unidad:{" "}
            {product.variant.isSample
              ? "Muestra"
              : product.unit.split(" - ")[0]}
          </span>
        )}
      </div>
    </ListItem>
  );
}
