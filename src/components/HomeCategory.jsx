import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/utils";

export function HomeCategory({ category }) {
  return (
    <Link
      href={{
        pathname: "/products/",
        query: { category: category.slug },
      }}
    >
      <div className={`group relative rounded overflow-hidden `}>
        <div>
          <Image
            className="object-cover group-hover:scale-125 transition ease-in-out w-full"
            src={getImageUrl(category.cover.url)}
            alt={category.cover.alt}
            width={category.cover.width}
            height={category.cover.height}
          />
        </div>
        <div className="absolute left-0 top-0 p-4 z-20">
          <h4 className="font-bold lg:text-3xl  text-2xl  group-hover:text-secondary group-hover:scale-110 group-hover:translate-x-5 transition-all ease-in-out">
            {category.name}
          </h4>
          <p className="text-secondary font-thin lg:text-xl text-lg group-hover:text-primary transition-all ease-in-out">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function HomeCategoryLoading() {
  return (
    <div className={`group relative rounded overflow-hidden animate-pulse`}>
      <div className="w-[100%] aspect-square place-items-center rounded-lg bg-gray-300 flex align-middle justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="h-[50%] w-[50%] text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </div>
  );
}
