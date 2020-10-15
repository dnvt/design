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

  // What's englobate the Font components
  // so it always perfectly align onto the grid
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

  // Need to separate integrate the H3 into a span
  // so it can get its own underline border
  const fontH3 = (
    <span
      className={classes.span}
      style={
        props.hover
          ? { borderColor: props.color }
          : { borderColor: "transparent" }
      }
    >
      {props.children}
    </span>
  );

  // Defining the main component to render
  let fontType = (
    <props.type
      className={classes[props.type]}
      style={{ color: props.color, margin: props.margin }}
    >
      <FontPadding type={props.type}>
        {props.type !== "h3" ? props.children : fontH3}
      </FontPadding>
    </props.type>
  );

  // Conditional rendering based on certain Font type
  if (
    props.type === "text" ||
    props.type === "hero" ||
    props.type === "link" ||
    props.type === "menu" ||
    props.type === "tooltip"
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

  // Font Component render
  // <Font type="type" color=(optional && default theme.text)" />
  return <>{fontType}</>;
};

export default Font;
