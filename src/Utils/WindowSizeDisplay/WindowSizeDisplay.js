import React from "react";
import WindowSizeDisplayStyle from "./WindowSizeDisplay-style";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { useDocumentSize } from "../../Hooks/useDocumentSize";
import Font from "../Font/Font";
import { useTheme } from "react-jss";
import Spacer from "../Spacer/Spacer";

const WindowSizeDisplay = (props) => {
  const theme = useTheme();
  const classes = WindowSizeDisplayStyle({ ...props, theme });
  const window = useWindowSize();
  const document = useDocumentSize();

  return (
    <div className={classes.Display}>
      <Spacer height={8} />
      <Font type='menu' color={theme.background}>
        w: {window.width}
        <br />
        h: {window.height}
        <br />
        d: {document.height}
      </Font>
      <Spacer height={8} />
    </div>
  );
};

export default WindowSizeDisplay;
