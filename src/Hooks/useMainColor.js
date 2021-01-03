import React, { useState, createContext, useContext } from "react";
import { useTheme } from "react-jss";

const MainColorCtx = createContext(["", () => {}]);

export const MainColorProvider = ({ children }) => {
  const theme = useTheme();
  const [color, setColor] = useState(theme.main);

  return (
    <MainColorCtx.Provider value={[color, setColor]}>
      {children}
    </MainColorCtx.Provider>
  );
};

export const useMainColor = () => {
  return useContext(MainColorCtx);
};
