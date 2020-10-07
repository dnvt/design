import React from "react";
import { useTheme } from "react-jss";
import MenuLink from "../../../UI/Links/MenuLink/MenuLink";
import CardStatusStyle from "./CardStatus-style";

const CardStatus = (props) => {
  const theme = useTheme();
  const classes = CardStatusStyle({...props, theme});

  return (
    <>
      <div className={classes.Status}>
        {props.loading && (
          <MenuLink icon='loading' value='Loading...' color={theme.text} />
        )}

        {props.nda && (
          <MenuLink icon='stop' value='NDA Projects' color={theme.text} />
        )}

        {props.wip && (
          <MenuLink
            icon='construction'
            value='In Progress'
            color={theme.text}
          />
        )}
      </div>
    </>
  );
};

export default CardStatus;
