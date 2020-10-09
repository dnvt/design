import React from "react";
import { useTheme } from "react-jss";
import MenuLink from "../../../UI/Links/MenuLink/MenuLink";
import CardStatusStyle from "./CardStatus-style";

const CardStatus = (props) => {
  const theme = useTheme();
  const classes = CardStatusStyle({ ...props, theme });

  let value;
  switch (props.status) {
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
      console.warn("Incorrect props.status on the Card component");
      break;
  }

  return (
    <>
      <div className={classes.Status}>
        <MenuLink icon={props.status} value={value} color={theme.text} />
      </div>
    </>
  );
};

export default CardStatus;
