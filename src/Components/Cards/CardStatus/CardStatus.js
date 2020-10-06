import React from "react";
import MenuLink from "../../../UI/Links/MenuLink/MenuLink";
import CardStatusStyle from "./CardStatus-style";

const CardStatus = () => {
  const classes = CardStatusStyle();

  return (
    <>
      <div className={classes.Status}>
        {loading && (
          <MenuLink icon='loading' value='Loading...' color={theme.text} />
        )}

        {nda && (
          <MenuLink icon='stop' value='NDA Projects' color={theme.text} />
        )}

        {wip && (
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
