import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [gif, setGif] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{ gif, setGif, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
}
