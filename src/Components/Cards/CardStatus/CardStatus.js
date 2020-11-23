import React from "react";
import { useTheme } from "react-jss";
import MenuLink from "../../../UI/Links/MenuLink/MenuLink";
import CardStatusStyle from "./CardStatus-style";

const CardStatus = (props) => {
  const theme = useTheme();
  const classes = CardStatusStyle({ ...props, theme });

  let value;
  switch (props.status) {
    case "link":
      value = "External link";
      break;
    case "loading":
      value = "Loading...";
      break;
    case "stop":
      value = "Password protected";
      break;
    case "construction":
      value = "In Progress";
      break;
    default:
      break;
  }

  return (
    <>
      <div className={classes.Status}>
        <MenuLink icon={props.status} value={value} color={props.color} />
      </div>
    </>
  );
};

export default CardStatus;
