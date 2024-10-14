import Image from "next/image";
import React from "react";

export function ProductBoard({
  leftImage = false,
  imageUrl = null,
  width,
  height,
  alt,
  title = "",
  textContent = "",
  children,
}) {
  return (
    <div>
      <div className="grid grid-cols-12 lm:gap-x-[30px] max-sm:gap-y-[30px] lg:my-5 my-10">
        <div
          className={`lg:col-span-7 col-span-12 relative order-1 ${
            leftImage ? "lg: order-2" : "lg: order-1"
          }`}
        >
          <div
            className={`flex flex-col align-middle justify-center h-full ${
              leftImage ? "lg:pl-5" : "lg:pr-5"
            } pb-5`}
          >
            <h2 className="text-3xl font-bold pb-3 text-center md:text-left">
              {title}
            </h2>
            <p className="text-center md:text-left">
              {children ? children : textContent}
            </p>
          </div>
        </div>
        {imageUrl && (
          <div
            className={`lg:col-span-5 col-span-12 order-2  ${
              leftImage ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <Image
              className="w-full rounded"
              src={imageUrl}
              width={width}
              height={height}
              alt={alt}
            />
          </div>
        )}
      </div>
    </div>
  );
}
