import React, { useState, createContext, useContext } from "react";

const GridVisibilityCtx = createContext([false, () => {}]);

export const GridVisibilityProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <GridVisibilityCtx.Provider value={[visibility, setVisibility]}>
      {children}
    </GridVisibilityCtx.Provider>
  );
};

export const useGridVisibility = () => {
  return useContext(GridVisibilityCtx);
};
