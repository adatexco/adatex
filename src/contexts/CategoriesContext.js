import { Category } from "@/api/category";
import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await Category.getAll();
        setCategories(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const data = {
    categories,
    setCategories,
  };

  return (
    <CategoriesContext.Provider value={data}>
      {children}
    </CategoriesContext.Provider>
  );
}
