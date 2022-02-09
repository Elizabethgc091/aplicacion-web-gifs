import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [gif, setGif] = useState([]);
  return (
    <AppContext.Provider value={{ gif, setGif }}>
      {children}
    </AppContext.Provider>
  );
}
