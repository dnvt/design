import React from "react";
import SeparatorStyle from "./Separator-style";

const Separator = (props) => {
  const classes = SeparatorStyle(props);

  return (
    <div
      className={classes.Separator}
      background={props.color}
      hover={props.hover}
      opacity={props.opacity}
      />
      );
    };
    
    export default Separator;