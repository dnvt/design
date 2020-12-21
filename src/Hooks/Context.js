import React from "react";
import { GridVisibilityProvider } from "./useGridVisibility";
import { WindowSizeProvider } from "./useWindowSize";
import { DocumentSizeProvider } from "./useDocumentSize";
import { ColorTheme } from "./useTheme";
import { MenuVisibilityProvider } from "./useMenu";

const Context = (props) => {
  return (
    <ColorTheme>
      <GridVisibilityProvider>
        <WindowSizeProvider>
          <MenuVisibilityProvider>
            <DocumentSizeProvider>{props.children}</DocumentSizeProvider>
          </MenuVisibilityProvider>
        </WindowSizeProvider>
      </GridVisibilityProvider>
    </ColorTheme>
  );
};

export default Context;
