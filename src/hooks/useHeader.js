import { useContext } from "react";
import { HeaderContext } from "@/contexts";

export const useHeader = () => useContext(HeaderContext);
