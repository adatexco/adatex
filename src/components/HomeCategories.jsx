import React from "react";
import { HomeCategory, HomeCategoryLoading } from ".";
import { useLoading } from "@/hooks";

const defaultCategories = [
  {
    id: "1",
    name: "Velvets",
    description: "Textiles suaves para tapicería",
    image:
      "https://helendo.jamstacktemplates.dev/images/products/vase-of-flowers/285x396.jpg",
    alt: "velvet",
  },
  {
    id: "2",
    name: "Jerseys",
    description: "Tela fria para camisetas",
    image:
      "https://helendo.jamstacktemplates.dev/images/products/helen-chair/568x389.jpg",
    alt: "velvet",
  },
  {
    id: "3",
    name: "Piel de Durazno",
    description: "Textiles suaves para confección",
    image:
      "https://helendo.jamstacktemplates.dev/images/products/art-deco-home/285x396.jpg",
    alt: "velvet",
  },
  {
    id: "4",
    name: "Cortineria",
    description: "Textiles para cortinas",
    image:
      "  https://helendo.jamstacktemplates.dev/images/products/wood-eggs/580x213.jpg",
    alt: "velvet",
  },
  {
    id: "5",
    name: "Coquito Tejidos",
    description: "Textiles para ser aruñados",
    image:
      "https://helendo.jamstacktemplates.dev/images/products/table-wood-pine/580x213.jpg",
    alt: "velvet",
  },
];

export function HomeCategories({ categories }) {
  const [loading, setLoading] = useLoading();

  return (
    <div className="container align-middle justify-center flex flex-col mt-9 mb-14">
      <h2 className="lg:text-4xl text-3xl font-bold">Nuestras Categorias</h2>
      <div>
        <div className="grid grid-cols-12  md:gap-[10px] gap-y-[15px] mt-9">
          {!loading ? (
            categories.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className={`lg:col-span-6  md:col-span-6 col-span-12 ${
                  index == 3 ? "lg:col-start-3" : ""
                } ${index == 4 ? "lg:col-start-7 md:col-start-4" : ""}`}
              >
                <HomeCategory key={category.id} category={category} />
              </div>
            ))
          ) : (
            <>
              <div className="lg:col-span-4  md:col-span-6 col-span-12">
                <HomeCategoryLoading />
              </div>
              <div className="lg:col-span-4  md:col-span-6 col-span-12">
                <HomeCategoryLoading />
              </div>
              <div className="lg:col-span-4  md:col-span-6 col-span-12">
                <HomeCategoryLoading />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
