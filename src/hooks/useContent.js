import { ContentContext } from "@/contexts";
import { useContext } from "react";

export const useContent = () => useContext(ContentContext);
