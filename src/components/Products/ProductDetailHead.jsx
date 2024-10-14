import React, { useEffect, useState } from "react";
import QuantityInput from "./QuantityInput";
import { Alert, Button } from "@material-tailwind/react";
import ProductVariantButton from "./ProductVariantButton";
import { NumericFormat } from "react-number-format";
import { getImageUrl, numberFormatter } from "@/utils";
import { ProductSpecs } from ".";
import { useAuth, useOrders, useCart, useLoading } from "@/hooks";
import Image from "next/image";

export function ProductDetailHead({ product }) {
  const { addCart } = useCart();
  const [loading, setLoading] = useLoading();
  const [selectedVariant, setSelectedVariant] = useState(
    product.inventory.length > 0 ? product.inventory[0] : null
  );
  const [variantHasSamples, setVariantHasSamples] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const handleSelectedVariant = (variant) => {
    if (selectedVariant) {
      if (selectedVariant.id == variant.id) {
        return true;
      }
    }
    return false;
  };

  const addCartWrapper = async (isSample = false) => {
    addCart(product.id, selectedVariant.id, quantity, isSample);
    setAlertText(
      isSample
        ? `Has añadido 1 muestra a tu carrito`
        : `Has añadido ${quantity} unidades de ${product.name} ${selectedVariant.color.name} al carrito`
    );
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  useEffect(() => {
    if (selectedVariant) {
      const sampleInventory = product.inventory.find(
        (i) => i.isSample && i.productInventoryId == selectedVariant.id
      );
      if (sampleInventory) {
        setVariantHasSamples(true);
        return;
      }
    }
    setVariantHasSamples(false);
  }, [selectedVariant]);

  const getSampleInventory = () => {
    return variantHasSamples
      ? `Muestras disponibles`
      : "No hay muestras disponibles";
  };

  return (
    <div className="border-b border-[#ededed]">
      <div className="grid grid-cols-12 lg:gap-x-[25px] max-md:gap-y-[25px]">
        <h2 className="col-span-12 mb-4 text-4xl font-bold lg:p-0 pt-5 lg:hidden flex">
          {product.name}
          {selectedVariant && ` - ${selectedVariant.color.name}`}
        </h2>
        <div className="lg:col-span-6 col-span-12 w-full h-full aspect-square">
          <Image
            className="w-full h-full  object-cover rounded"
            src={
              selectedVariant
                ? getImageUrl(selectedVariant.images[0].url)
                : getImageUrl(product.images[0].url)
            }
            width={
              selectedVariant
                ? selectedVariant.images[0].width
                : product.images[0].width
            }
            height={
              selectedVariant
                ? selectedVariant.images[0].height
                : product.images[0].height
            }
          />
        </div>
        <div className="lg:col-span-6 col-span-12 w-full">
          <div>
            <h2 className="mb-3 text-4xl font-bold  lg:flex hidden">
              {product.name}
              {selectedVariant && ` - ${selectedVariant.color.name}`}
            </h2>
            <div className="flex flex-col lg:pt-0 pt-5">
              <span className="text-2xl text-secondary font-bold">
                {numberFormatter(product.price, "$")}
              </span>
              <span className="font-light text-gray-600 text-sm">
                Precio por{" "}
                {product.unit == "Kilogramo - kg" ? "kilogramo" : "metro"}
              </span>
            </div>

            <p className="py-4 text-justify">{product.description}</p>
            <div>
              <div className="flex lg:flex-row flex-col py-3 justify-start align-middle lg:mx-0 m-0 sm:mr-[50px] md:mr-[300px] lg:mr-0">
                <div className="flex flex-col">
                  <div className="flex lg:flex-row flex-col ">
                    <QuantityInput
                      quantity={quantity}
                      setQuantity={setQuantity}
                    />
                    <div className="flex flex-row w-full lg:w-auto align-middle justify-center gap-3 lg:gap-0 py-4  lg:py-0">
                      <Button
                        loading={loading}
                        onClick={() => addCartWrapper(false)}
                        disabled={
                          selectedVariant &&
                          quantity !== 0 &&
                          quantity <= selectedVariant.quantity
                            ? false
                            : true
                        }
                        className="rounded lg:mx-3 font-alegreya lg:w-auto lg:min-w-[157px] w-full mr-3 lg:h-auto h-[50px]"
                      >
                        Agregar al carrito
                      </Button>

                      <Button
                        className="rounded font-alegreya bg-primary min-h-10 lg:min-w-[157px] lg:w-auto w-full lg:h-auto h-[50px]"
                        disabled={
                          selectedVariant && variantHasSamples ? false : true
                        }
                        loading={loading}
                        onClick={() => addCartWrapper(true)}
                      >
                        Pedir muestra
                      </Button>
                    </div>
                  </div>
                  {selectedVariant && (
                    <div className="flex lg:justify-end justify-between gap-3 lg:pt-1 pt-0 text-gray-600">
                      <span className="lg:w-[157px] w-full text-start  lg:text-end text-xs">
                        Disponible - {numberFormatter(selectedVariant.quantity)}{" "}
                        {product.unit.split(" - ")[1]}
                      </span>
                      <span className="lg:w-[157px] w-full text-start  lg:text-end text-xs">
                        {getSampleInventory()}
                      </span>
                    </div>
                  )}
                  <div className="w-full m-0 flex justify-center align-middle">
                    <Alert
                      open={showAlert}
                      className="w-full font-alegreya p-2 mt-2 lg:text-left"
                    >
                      {alertText}
                    </Alert>
                  </div>
                </div>
              </div>
            </div>
            <ProductSpecs product={product} />
          </div>
        </div>
        <h3 className="mt-3 font-bold text-secondary text-2xl">Colores</h3>
        <div className="col-span-12">
          <div className="flex flex-wrap">
            {product.inventory
              .filter((i) => !i.isSample)
              .map((variant, index) => (
                <ProductVariantButton
                  variant={variant}
                  actualSelectedVariant={selectedVariant}
                  setSelectedVariant={setSelectedVariant}
                  selected={handleSelectedVariant(variant)}
                  key={`${variant.id}-${index}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
