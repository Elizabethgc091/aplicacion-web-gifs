import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{ gifs, setGifs, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
}
