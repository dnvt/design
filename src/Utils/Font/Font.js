import React from "react";
import { useTheme } from "react-jss";

import { useWindowSize } from "../../Hooks/useWindowSize";

import FontStyle from "./Font-style";
import FontSpacing from "./FontSpacing";
import Spacer from "../Spacer/Spacer";

const Font = (props) => {
  const theme = useTheme();
  const classes = FontStyle({ ...props, theme });
  const window = useWindowSize();
  const FONTSPACING = FontSpacing(window);

  const FontPadding = (props) => {
    return (
      <>
        <Spacer
          font
          width='100%'
          height={FONTSPACING[props.type].top}
          bg={
            props.type !== "h2" && props.type !== "hero" ? theme.main50 : null
          }
        />
        {props.children}

        <Spacer
          font
          width='100%'
          height={FONTSPACING[props.type].bottom}
          bg={
            props.type !== "h2" && props.type !== "hero" ? theme.main50 : null
          }
        />
      </>
    );
  };

  let fontType = (
    <props.type className={classes[props.type]} style={{ color: props.color }}>
      <FontPadding type={props.type}>{props.children}</FontPadding>
    </props.type>
  );

  if (
    props.type === "text" ||
    props.type === "hero" ||
    props.type === "link" ||
    props.type === "menu"
  ) {
    fontType = (
      <div
        ref={props.passRef}
        className={classes[props.type]}
        style={{ color: props.color }}
      >
        <FontPadding type={props.type}>{props.children}</FontPadding>
      </div>
    );
  }

  return <>{fontType}</>;
};

export default Font;
