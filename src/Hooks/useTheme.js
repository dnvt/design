import React, { createContext, useContext } from "react";
import { useTheme, ThemeProvider } from "react-jss";
import { dark, light } from "../Utils/Theme";
import useDarkMode from "use-dark-mode";

const DarkModeCtx = createContext([false, () => {}]);

export function ColorTheme({ children }) {
  const darkMode = useDarkMode(false);

  return (
    <DarkModeCtx.Provider value={false}>
      <ThemeProvider theme={darkMode.value ? dark : light}>
        {children}
      </ThemeProvider>
    </DarkModeCtx.Provider>
  );
}

export function useDarkTheme() {
  return useContext(DarkModeCtx);
}

export default useTheme;
