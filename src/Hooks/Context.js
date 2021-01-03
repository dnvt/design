import React from "react";
import { GridVisibilityProvider } from "./useGridVisibility";
import { WindowSizeProvider } from "./useWindowSize";
import { DocumentSizeProvider } from "./useDocumentSize";
import { ColorTheme } from "./useTheme";
import { MenuVisibilityProvider } from "./useMenu";
import { TooltipVisibilityProvider } from "./useTooltip";
import { MainColorProvider } from "./useMainColor";

const Context = (props) => {
  return (
    <ColorTheme>
      <GridVisibilityProvider>
        <WindowSizeProvider>
          <MenuVisibilityProvider>
            <TooltipVisibilityProvider>
              <MainColorProvider>
                <DocumentSizeProvider>{props.children}</DocumentSizeProvider>
              </MainColorProvider>
            </TooltipVisibilityProvider>
          </MenuVisibilityProvider>
        </WindowSizeProvider>
      </GridVisibilityProvider>
    </ColorTheme>
  );
};

export default Context;
