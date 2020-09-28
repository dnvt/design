import React, { useState, useEffect, createContext, useContext } from "react";

const WindowSizeCtx = createContext({ width: undefined, height: undefined });

export const WindowSizeProvider = ({ children }) => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeCtx.Provider value={windowSize}>
      {children}
    </WindowSizeCtx.Provider>
  );
};

export const useWindowSize = () => {
  return useContext(WindowSizeCtx);
};
