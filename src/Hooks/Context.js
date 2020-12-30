import React from "react";
import { GridVisibilityProvider } from "./useGridVisibility";
import { WindowSizeProvider } from "./useWindowSize";
import { DocumentSizeProvider } from "./useDocumentSize";
import { ColorTheme } from "./useTheme";
import { MenuVisibilityProvider } from "./useMenu";
import { TooltipVisibilityProvider } from "./useTooltip";

const Context = (props) => {
  return (
    <ColorTheme>
      <GridVisibilityProvider>
        <WindowSizeProvider>
          <MenuVisibilityProvider>
            <TooltipVisibilityProvider>
              <DocumentSizeProvider>{props.children}</DocumentSizeProvider>
            </TooltipVisibilityProvider>
          </MenuVisibilityProvider>
        </WindowSizeProvider>
      </GridVisibilityProvider>
    </ColorTheme>
  );
};

export default Context;
