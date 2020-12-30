import React, { useState, createContext, useContext } from "react";

const TooltipVisibilityCtx = createContext([false, () => {}]);

export const TooltipVisibilityProvider = ({ children }) => {
  const [hint, setHint] = useState(false);

  return (
    <TooltipVisibilityCtx.Provider value={[hint, setHint]}>
      {/* {hint && console.log("hello")} */}
      {children}
    </TooltipVisibilityCtx.Provider>
  );
};

export const useTooltip = () => {
  return useContext(TooltipVisibilityCtx);
};