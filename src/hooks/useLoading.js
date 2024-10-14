import { LoadingContext } from "@/contexts";
import { useContext } from "react";

export const useLoading = () => useContext(LoadingContext);
