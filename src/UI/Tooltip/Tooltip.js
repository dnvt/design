import React from "react";
import { useTheme } from "react-jss";
import Font from "../../Utils/Font/Font";
import TooltipStyle from "./Tooltip-style";

const Tooltip = (props) => {
  const theme = useTheme();
  const classes = TooltipStyle({ ...props, theme });

  // TODO: Create a new font style for the tooltips
  return (
    <div className={classes.Tooltip}>
      <div style={{ margin: "-12px 0 -4px 0" }}>
        <Font type='legend' color={theme.background}>
          {props.value}
        </Font>
      </div>
    </div>
  );
};

export default Tooltip;
