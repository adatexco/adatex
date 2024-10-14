import {
  IconButton,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import QuantityInput from "../Products/QuantityInput";
import { XCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import { getImageUrl, numberFormatter } from "@/utils";
import { useCart } from "@/hooks";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

export function CartItemHead() {
  return (
    <tr>
      <th>
        <span className="flex text-center justify-start"></span>
      </th>
      <th>
        <span className="flex text-center justify-center">Precio</span>
      </th>
      <th>
        <span className="flex text-center justify-center">Cantidad</span>
      </th>
      <th>
        <span className="flex text-center justify-center">Total</span>
      </th>
    </tr>
  );
}

export function CartItem({ product, editable = false }) {
  const { changeQuantityItem, deleteItem } = useCart();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleAddQuantity = () => {
    let newQuantity = product.quantity + 1;
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    changeQuantityItem(product.variant.id, newQuantity, product.isSample);
  };

  const handleReduceQuantity = () => {
    let newQuantity = product.quantity - 1;
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    changeQuantityItem(product.variant.id, newQuantity, product.isSample);
  };

  useEffect(() => {
    const { md } = resolveConfig(tailwindConfig).theme.screens;
    setIsLargeScreen(window.innerWidth > Number(md.split("px")[0]));
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > Number(md.split("px")[0]));
    };

    // Agregar el event listener al montar el componente
    window.addEventListener("resize", handleResize);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isLargeScreen ? (
        <tr className="hidden md:table-row border-b !text-secondary">
          <td>
            <div className="flex flex-row justify-left">
              <div className="flex md:w-20 w-14  p-2 aspect-square self-center rounded overflow-hidden">
                <img
                  src={getImageUrl(product.variant.images[0].url)}
                  className="self-center w-full aspect-square rounded"
                />
              </div>
              <div className="flex flex-col justify-center align-middle">
                <div className="flex flex-row gap-1">
                  <span className="font-bold">{product.name}</span>
                  {product.isSample && (
                    <>
                      <span>{" - "}</span>
                      <div className="flex align-middle justify-center  bg-primary px-1 rounded text-white">
                        <span>Muestra</span>
                      </div>
                    </>
                  )}
                </div>
                <span className=""> {product.variant.color.name}</span>
                {editable && (
                  <span className="">
                    Unidad: {product.unit.split(" - ")[1]}
                  </span>
                )}
              </div>
            </div>
          </td>
          <td>
            <span className="flex flex-row justify-center text-center align-middle gap-1">
              {numberFormatter(product.price, "$")}
            </span>
          </td>
          <td>
            <div className="flex flex-row justify-between text-center align-middle px-2  gap-1">
              {editable && (
                <IconButton
                  onClick={handleReduceQuantity}
                  variant="text"
                  className="w-10 aspect-square"
                  disabled={product.isSample}
                >
                  <MinusIcon className="w-full h-full self-center text-secondary" />
                </IconButton>
              )}

              <div className="m-auto">
                <span className="text-center">{product.quantity}</span>
              </div>
              {editable && (
                <IconButton
                  onClick={handleAddQuantity}
                  variant="text"
                  className="w-10 aspect-square"
                  disabled={product.isSample}
                >
                  <PlusIcon className="w-full h-full self-center text-secondary" />
                </IconButton>
              )}
            </div>
          </td>
          <td>
            <div className="flex flex-row justify-between align-middle text-center gap-1">
              <div className="m-auto">
                <span className="text-center">
                  {numberFormatter(product.total, "$")}
                </span>
              </div>
            </div>
          </td>
          <td>
            {editable && (
              <IconButton
                onClick={() => deleteItem(product.variant.id, product.isSample)}
                variant="text"
                className="w-10  aspect-square m-auto"
              >
                <XCircleIcon className="w-full h-full self-center text-secondary" />
              </IconButton>
            )}
          </td>
        </tr>
      ) : (
        <div className="flex flex-col w-full !font-alegreya relative">
          {product.isSample && (
            <div className="absolute flex align-middle justify-center -top-3 -right-3 bg-primary w-12 p-1  rounded-se text-white">
              <span className="text-xs">Muestra</span>
            </div>
          )}
          <div className="md:hidden flex flex-row justify-between gap-3 border-b pb-1">
            <div className="flex flex-row gap-2">
              <div className="flex aspect-square w-10 m-auto rounded overflow-hidden">
                <img
                  src={getImageUrl(product.variant.images[0].url)}
                  className="object-contain aspect-square"
                />
              </div>
              <div className="flex flex-col align-middle justify-center">
                <span className="font-bold text-sm">{product.name}</span>
                <span className="font-light text-xs">
                  {product.variant.color.name}
                </span>
                <span className="font-light text-xs text-secondary">
                  {numberFormatter(product.price, "$")}
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col sm:flex-row justify-center gap-1 mr-3">
                {editable && (
                  <IconButton
                    onClick={handleReduceQuantity}
                    variant="text"
                    className="w-5 h-5 m-auto"
                    disabled={product.isSample}
                  >
                    <MinusIcon className="w-full h-full" />
                  </IconButton>
                )}

                <span className="text-center sm:self-center text-xs font-light text-secondary">
                  {product.quantity}
                </span>
                {editable && (
                  <IconButton
                    onClick={handleAddQuantity}
                    variant="text"
                    className="w-5 h-5 m-auto"
                    disabled={product.isSample}
                  >
                    <PlusIcon className="w-full h-full" />
                  </IconButton>
                )}
              </div>
              {editable && (
                <IconButton
                  onClick={() =>
                    deleteItem(product.variant.id, product.isSample)
                  }
                  variant="text"
                  className="w-7 h-7 m-auto"
                >
                  <XCircleIcon className="w-full h-full" />
                </IconButton>
              )}
            </div>
          </div>
          <div className="flex justify-between align-middle mt-2 md:hidden">
            <span className="font-normal text-sm text-secondary">
              Total: {numberFormatter(product.total, "$")}
            </span>
            {editable && (
              <span className="font-light text-xs text-center self-center text-secondary">
                Unidad: {product.unit.split(" - ")[1]}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
