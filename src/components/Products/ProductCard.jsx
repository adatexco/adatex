import React, { useState } from "react";
import Link from "next/link";
import { getImageUrl, numberFormatter } from "@/utils";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export function ProductCard({ product }) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <Link
      href={{
        pathname: `/products/[slug]`,
        query: { slug: product.slug },
      }}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <div className="flex flex-col group w-full h-full items-center justify-center overflow-hidden">
        <div className="transition-opacity duration-500 ease-in-out hover:opacity-70 !rounded overflow-hidden w-full max-w-[250px] mx-h-[250px]">
          <Image
            src={
              mouseOver
                ? getImageUrl(
                    product.images[
                      Math.floor(Math.random() * product.images.length)
                    ].url
                  )
                : getImageUrl(product.images[0].url)
            }
            width={product.images[0].width}
            height={product.images[0].height}
            className="aspect-square object-fill max-w-[250px] mx-h-[250px] w-full h-full transition-opacity duration-500 ease-in-out hover:opacity-70 rounded overflow-hidden"
            alt={product.slug}
          />
        </div>

        <div className="flex flex-col align-middle justify-center text-center mt-1">
          <h3 className="font-bold text-secondary group-hover:text-primary  text-2xl md:text-lg whitespace-nowrap transition-all  ease-in-out">
            {product.name}
          </h3>
          <span className="font-thin md:text-sm text-base">
            Ancho: {product.width} cm
          </span>
          <span className="font-thin md:text-sm text-base">
            Gramaje: {product.gsm} g/m²
          </span>
          <span className="font-bold text-secondary text-2xl md:text-lg">
            {numberFormatter(product.price, "$")}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ProductCardLoading() {
  return (
    <div className="flex flex-col group w-full h-full items-center justify-center animate-pulse p-4">
      <div className="transition-opacity duration-500 ease-in-out hover:opacity-70 rounded m-auto self-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-[50%] aspect-square self-center text-center m-auto text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>

      <div className="flex flex-col align-middle justify-center text-center mt-1 p-4">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-2 w-full rounded-full bg-gray-300 self-center"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-1 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-1 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>
    </div>
  );
}
