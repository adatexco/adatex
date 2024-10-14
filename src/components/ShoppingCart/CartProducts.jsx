import React, { useState, useEffect } from "react";
import { CartItem, CartItemHead } from "@/components";
import { ListItem, List } from "@material-tailwind/react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

export function CartProducts({
  className = "",
  products = [],
  editable = false,
  hideTitle = false,
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const { md } = resolveConfig(tailwindConfig).theme.screens;
    setIsLargeScreen(window.innerWidth > Number(md.split("px")[0]));
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > Number(md.split("px")[0]));
    };

    // Agregar el event listener al montar el componente
    window.addEventListener("resize", handleResize);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${className} w-full sm:p-3 md:p-0  sm:bg-white`}>
      {!hideTitle && <h3 className="p-3 font-bold md:hidden">Productos</h3>}
      {isLargeScreen ? (
        <table className="hidden md:table w-full table-auto  text-left">
          <thead>{editable && <CartItemHead />}</thead>
          <tbody>
            {products.map((product) => (
              <CartItem
                key={`${product.id}-${product.variant.id}-${product.isSample}`}
                product={product}
                editable={editable}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <List className={`${hideTitle && "px-0"} block md:hidden`}>
          {products.map((product) => (
            <ListItem
              className=" !bg-gray-100 !mb-4"
              key={`${product.id}-${product.variant.id}-${product.isSample}`}
            >
              <CartItem product={product} editable={editable} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}
