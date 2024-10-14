import { useContext } from "react";
import { CategoriesContext } from "@/contexts";

export const useCategories = () => useContext(CategoriesContext);
