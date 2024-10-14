import { getImageUrl } from "@/utils";
import Image from "next/image";
import React from "react";

export default function ProductVariantButton({
  variant,
  setSelectedVariant,
  actualSelectedVariant,
  selected = true,
}) {
  const handleVariantSelection = () => {
    if (!actualSelectedVariant) {
      setSelectedVariant(variant);
    } else {
      if (variant.id === actualSelectedVariant.id) {
        setSelectedVariant(null);
      } else {
        setSelectedVariant(variant);
      }
    }
  };

  return (
    <div
      className={`${
        selected && " !border-primary"
      } flex flex-col  mr-3 my-3 p-1 border border-transparent rounded group transition-all ease-in-out`}
      onClick={handleVariantSelection}
    >
      <div className="w-24 h-24 overflow-hidden rounded">
        <Image
          src={getImageUrl(variant.images[0].url)}
          className="group-hover:scale-125 transition ease-in-out"
          width={variant.images[0].width}
          height={variant.images[0].height}
        />
      </div>
      <span
        className={`${
          selected ? "text-primary" : "text-secondary"
        } font-medium  group-hover:text-primary transition-all ease-in-out`}
      >
        {variant.color.name}
      </span>
    </div>
  );
}
