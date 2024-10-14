import { Header } from "@/api";
import { createContext, useEffect, useState } from "react";

export const HeaderContext = createContext();

export function HeaderProvider(props) {
  const { children } = props;

  const [header, setHeader] = useState({ title: "", content: "" });

  const data = {
    header,
    setHeader,
  };

  const getHeader = async () => {
    setHeader(await Header.get());
  };

  useEffect(() => {
    getHeader();
  }, []);

  return (
    <HeaderContext.Provider value={data}>{children}</HeaderContext.Provider>
  );
}
