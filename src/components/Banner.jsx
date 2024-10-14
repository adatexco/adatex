import { ENV } from "@/utils";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export function Banner(props) {
  const {
    withImage = true,
    imageUrl = null,
    gray = false,
    title,
    children,
    width,
    height,
  } = props;
  const router = useRouter();
  const handleClick = () => {
    router.push("/products");
  };
  return (
    <div
      className={`flex align-middle justify-center  w-full py-10 min-h-80 ${
        gray ? "bg-secondary" : "bg-primary"
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-12 sm:gap-10  w-full h-full">
          <div
            className={`${
              withImage ? "lg:col-span-6 col-span-12" : "col-span-12"
            }`}
          >
            <div className="w-full h-full flex justify-center flex-col ">
              <h3 className="text-5xl font-bold text-white lg:text-left text-center lg:pb-0 pb-4 ">
                {title}
              </h3>
              {children}
            </div>
          </div>
          {withImage && imageUrl && (
            <div className="lg:col-span-6 col-span-12 flex align-middle justify-center">
              <Image
                src={imageUrl}
                className="w-full object-cover aspect-square rounded"
                width={width}
                height={height}
              />
            </div>
          )}
          <div className="lg:hidden flex col-span-12 align-middle justify-center self-center">
            <Button
              onClick={handleClick}
              fullWidth
              className="font-alegreya my-4 w-full"
            >
              Ver productos y solicita tus muestras
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
