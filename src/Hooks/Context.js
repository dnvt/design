import React from "react";
import { GridVisibilityProvider } from "./useGridVisibility";
import { WindowSizeProvider } from "./useWindowSize";
import { DocumentSizeProvider } from "./useDocumentSize";
import { ColorTheme } from "./useTheme";
import { MenuVisibilityProvider } from "./useMenu";
import { TooltipVisibilityProvider } from "./useTooltip";
import { MainColorProvider } from "./useMainColor";
import { HeroTransitionProvider } from "./useHeroTransition";

const Context = (props) => {
  return (
    <ColorTheme>
      <GridVisibilityProvider>
        <WindowSizeProvider>
          <MenuVisibilityProvider>
            <TooltipVisibilityProvider>
              <MainColorProvider>
                <HeroTransitionProvider>
                  <DocumentSizeProvider>{props.children}</DocumentSizeProvider>
                </HeroTransitionProvider>
              </MainColorProvider>
            </TooltipVisibilityProvider>
          </MenuVisibilityProvider>
        </WindowSizeProvider>
      </GridVisibilityProvider>
    </ColorTheme>
  );
};

export default Context;
