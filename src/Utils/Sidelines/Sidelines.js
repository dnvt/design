import React from "react";
import SidelinesStyle from "./Sidelines-style";
import { useTheme } from "react-jss";

const Sidelines = (props) => {
  const theme = useTheme();
  const classes = SidelinesStyle({ ...props, theme });

  return <div className={classes.sidelines}></div>;
};

export default Sidelines;
