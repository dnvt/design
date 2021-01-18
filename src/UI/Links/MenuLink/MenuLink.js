import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "react-jss";

import DarkModeToggle from "../../Buttons/ThemeToggle";
import GridToggle from "../../Buttons/GridToggle";

import MenuLinkStyle from "./MenuLink-style";
import Font from "../../../Utils/Font/Font";
import Separator from "../../../Utils/Separator/Separator";
import Icon from "../../../Utils/Icon/Icon";
import Tooltip from "../../Tooltip/Tooltip";
import MenuToggle from "../../Buttons/MenuToggle";

const MenuLink = (props) => {
  const theme = useTheme();
  const classes = MenuLinkStyle({ ...props, theme });
  console.log()

  // TODO: Simplify the shit out of this 
  // by creating several MenuLink components
  // > IconLink
  // > MenuLink
  // > WIPLink

  //  ICONS
  /// Default case
  let iconType = (
    <Icon
      name={props.isHovered && props.iconHover ? props.iconHover : props.icon}
      color={props.hover && props.isHovered ? props.hover : props.color}
    />
  );

  /// Where I set the different icon options
  /// Specific cases
  switch (props.icon) {
    case "grid":
      iconType = (
        <GridToggle
          active={props.hover && props.isHovered ? props.active : props.hover}
          color={props.hover && props.isHovered ? props.hover : props.color}
        />
      );
      break;
    case "theme":
      iconType = (
        <DarkModeToggle
          icon={props.hover && props.isHovered ? "lightOff" : "lightOn"}
          iconDark={props.hover && props.isHovered ? "darkOff" : "darkOn"}
          color={props.hover && props.isHovered ? props.hover : props.color}
        />
      );
      break;
    case "menu": /// For mobile
      iconType = (
        <MenuToggle
          color={props.hover && props.isHovered ? props.hover : props.color}
        />
      );
      break;
    default:
      break;
  }

  /// Constant icon, considering all the icon option
  /// Call {icon}
  const icon = (
    <div className={classes.icon} style={props.value && { marginRight: "8px" }}>
      {iconType}
    </div>
  );

  //  OTHER PROPS
  /// Content => Text in the menu link
  const content = (
    <div>
      <Font
        type='menu'
        color={props.hover && props.isHovered ? props.hover : props.color}
      >
        {props.value}
      </Font>
      <Separator
        opacity={props.hover && props.isHovered ? 1 : 0}
        color={props.hover && props.isHovered ? props.hover : props.color}
      />
    </div>
  );

  /// Icon on the right side
  const iconRight = (
    <div className={classes.iconRight}>
      <Icon
        name={props.iconRight}
        color={props.hover && props.isHovered ? props.hover : props.color}
      />
    </div>
  );

  /// Tooltip
  const tooltip = (
    <div
      style={{ left: props.left }}
      className={
        props.isHovered && props.hint ? classes.tooltipHovered : classes.tooltip
      }
    >
      <Tooltip value={props.tooltip} />
    </div>
  );

  /// Use noLink for when menuLink has an action, not a link
  if (props.noLink)
    return (
      <div className={classes.MenuLink} ref={props.hoveredRef}>
        {props.icon && icon}
        {props.value && content}
        {props.iconRight && iconRight}
        {props.tooltip && tooltip}
      </div>
    );

  if (!props.hover)
    return (
      <div className={classes.MenuLink} ref={props.hoveredRef}>
        {props.icon && icon}
        {props.value && content}
        {props.iconRight && iconRight}
      </div>
    );

  if (props.wip)
    return (
      <div className={classes.WIPLink} ref={props.hoveredRef}>
        {props.icon && icon}
        {props.value && content}
        {props.iconRight && iconRight}
        {props.tooltip && tooltip}
      </div>
    );

  /// <MenuLink {...props}/> component export
  return (
    <Link
      to={props.to ? props.to : "/"}
      className={classes.MenuLink}
      ref={props.hoveredRef}
      onClick={props.clicked}
    >
      {props.icon && icon}
      {props.value && content}
      {props.iconRight && iconRight}
    </Link>
  );
};

export default memo(MenuLink);
