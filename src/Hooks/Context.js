import React from "react";
import { GridVisibilityProvider } from "./useGridVisibility";
import { WindowSizeProvider } from "./useWindowSize";
import { DocumentSizeProvider } from "./useDocumentSize";
import { ColorTheme } from "./useTheme";

const Context = (props) => {
  return (
    <ColorTheme>
      <GridVisibilityProvider>
        <WindowSizeProvider>
          <DocumentSizeProvider>{props.children}</DocumentSizeProvider>
        </WindowSizeProvider>
      </GridVisibilityProvider>
    </ColorTheme>
  );
};

export default Context;
