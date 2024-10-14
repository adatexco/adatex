import { MainLayout } from "@/components";
import { useContent } from "@/hooks";
import Image from "next/image";
import React from "react";

export default function SamplesPage() {
  const { content } = useContent();
  const image = content?.contentMedia[1] ?? null;

  if (!content) {
    return null;
  }

  return (
    <MainLayout>
      <div className="container grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6"></div>
        <div className="col-span-12 lg:col-span-6">
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className=" aspect-square w-full"
          />
        </div>
      </div>
    </MainLayout>
  );
}
