import React, { useState, createContext, useContext } from "react";

const MenuVisibilityCtx = createContext([false, () => {}]);

export const MenuVisibilityProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  return (
    <MenuVisibilityCtx.Provider value={[menu, setMenu]}>
      {menu && console.log("hello")}
      {children}
    </MenuVisibilityCtx.Provider>
  );
};

export const useMenuVisibility = () => {
  return useContext(MenuVisibilityCtx);
};
