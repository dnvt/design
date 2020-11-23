import React, { memo } from "react";
import { useTheme } from "react-jss";

import DarkModeToggle from "../../Buttons/ThemeToggle";
import GridToggle from "../../Buttons/GridToggle";
import Font from "../../../Utils/Font/Font";
import Separator from "../../../Utils/Separator/Separator";
import Icon from "../../../Utils/Icon/Icon";
import MenuLinkStyle from "./MenuLink-style";
import useHover from "../../../Hooks/useHover";
import { Link } from "react-router-dom";
import Tooltip from "../../Tooltip/Tooltip";

const MenuLink = (props) => {
  const [hoveredRef, isHovered] = useHover();
  const theme = useTheme();
  const classes = MenuLinkStyle({ ...props, theme });

  let iconType = (
    <Icon
      name={props.icon}
      color={props.hover && isHovered ? props.hover : props.color}
    />
  );

  switch (props.icon) {
    case "grid":
      iconType = (
        <GridToggle
          active={props.hover && isHovered ? props.active : props.hover}
          color={props.hover && isHovered ? props.hover : props.color}
        />
      );
      break;
    case "theme":
      iconType = (
        <DarkModeToggle
          color={props.hover && isHovered ? props.hover : props.color}
        />
      );
      break;
    default:
      break;
  }

  const icon = (
    <div className={classes.icon} style={props.value && { marginRight: "8px" }}>
      {iconType}
    </div>
  );

  const content = (
    <div>
      <Font
        type='menu'
        color={props.hover && isHovered ? props.hover : props.color}
      >
        {props.value}
      </Font>
      <Separator
        opacity={props.hover && isHovered ? 1 : 0}
        color={props.hover && isHovered ? props.hover : props.color}
      />
    </div>
  );

  const iconRight = (
    <div className={classes.iconRight}>
      <Icon
        name={props.iconRight}
        color={props.hover && isHovered ? props.hover : props.color}
      />
    </div>
  );

  const tooltip = (
    <div
      style={{ left: props.left }}
      className={isHovered ? classes.tooltipHovered : classes.tooltip}
    >
      <Tooltip value={props.tooltip} />
    </div>
  );

  if (props.noLink)
    return (
      <div className={classes.MenuLink} ref={hoveredRef}>
        {props.icon && icon}
        {props.value && content}
        {props.iconRight && iconRight}
        {props.tooltip && tooltip}
      </div>
    );

  if (!props.hover)
    return (
      <div className={classes.MenuLink} ref={hoveredRef}>
        {props.icon && icon}
        {props.value && content}
        {props.iconRight && iconRight}
      </div>
    );

  return (
    <Link
      to={props.to ? props.to : "/"}
      className={classes.MenuLink}
      ref={hoveredRef}
    >
      {props.icon && icon}
      {props.value && content}
      {props.iconRight && iconRight}
    </Link>
  );
};
export default memo(MenuLink);
