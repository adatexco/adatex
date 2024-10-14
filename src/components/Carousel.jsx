import React from "react";
import { Carousel as MaterialCarousel } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/utils";

export function Carousel(props) {
  const items = props.products;
  return (
    <div className="cars">
      <MaterialCarousel
        className="lg:h-[600px] md:h-[400px] sm:h-[300px] h-[400px]"
        autoplay
        autoplayDelay={5000}
        loop
      >
        {items.map((item) => (
          <div key={item.id} className="relative h-full w-full">
            <Image
              src={getImageUrl(item.cover.url)}
              alt={item.cover.alt}
              width={item.cover.width}
              height={item.cover.height}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-cente bg-black/30">
              <div className="flex flex-col justify-center align-middle w-full h-full m-auto">
                <h3 className="text-center lg:text-left lg:ml-[100px] lg:text-7xl font-bold md:text-4xl text-xl text-white">
                  {item.name}
                </h3>
                <p className="text-center  text-white lg:text-left lg:ml-[100px] lg:text-2xl md:text-xl  lg:mt-2 m-6 text-base">
                  {item.summary}
                </p>
                <Link
                  href={`/products/${item.slug}`}
                  className="text-center lg:text-left"
                >
                  <Button className="hover:bg-primary font-alegreya hover:border-primary text-center font-bold  text-white  lg:text-left lg:ml-[100px] text-sm lg:text-1xl mt-2 border border-black rounded p-2 bg-black">
                    Ver producto
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </MaterialCarousel>
    </div>
  );
}
