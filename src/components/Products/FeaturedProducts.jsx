import React from "react";
import { ProductCard, ProductCardLoading } from ".";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useLoading } from "@/hooks";

export function FeaturedProducts({ products = [] }) {
  const router = useRouter();
  const [loading, setLoading] = useLoading();
  return (
    <div className="container mb-9">
      <h3 className="text-4xl font-bold p-5 pt-9 text-center">
        Ultimos lanzamientos
      </h3>

      <div className="flex justify-center md:justify-start w-full">
        <Button
          variant="text"
          className="md:ml-5 ml-0 p-0 hover:bg-transparent"
          onClick={() => router.push("/products")}
        >
          Ver todos los productos
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-36 gap-x-[25px] gap-y-[40px]">
        {!loading ? (
          products.map((product) => (
            <div
              className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 p-5"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <>
            <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 p-5">
              <ProductCardLoading />
            </div>
            <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 p-5">
              <ProductCardLoading />
            </div>
            <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 p-5">
              <ProductCardLoading />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
