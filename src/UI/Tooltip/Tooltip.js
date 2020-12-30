import React from "react";
import { useTheme } from "react-jss";
import Font from "../../Utils/Font/Font";
import TooltipStyle from "./Tooltip-style";

const Tooltip = (props) => {
  const theme = useTheme();
  const classes = TooltipStyle({ ...props, theme });

  return (
    <div className={classes.Tooltip}>
      <Font type='tooltip'>{props.value}</Font>
    </div>
  );
};

export default Tooltip;
