import React, { useState, createContext, useContext } from "react";

const HeroTransitionCtx = createContext([
  { dashboard: true, cover: true },
  () => {},
]);

export const HeroTransitionProvider = ({ children }) => {
  const [transition, setHeroTransition] = useState({
    dashboard: true,
    cover: true,
  });

  return (
    <HeroTransitionCtx.Provider value={[transition, setHeroTransition]}>
      {/* {menu && console.log("hello")} */}
      {children}
    </HeroTransitionCtx.Provider>
  );
};

export const useHeroTransition = () => {
  return useContext(HeroTransitionCtx);
};
