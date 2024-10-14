import { createContext, useEffect, useState } from "react";

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const data = [loading, setLoading];

  return (
    <LoadingContext.Provider value={data}>{children}</LoadingContext.Provider>
  );
}
