import React, { memo } from "react";
import { useMenuVisibility } from "../../Hooks/useMenu";
import Icon from "../../Utils/Icon/Icon";
import ButtonStyle from "./Button-style";

const MenuToggle = (props) => {
  const classes = ButtonStyle();
  const [menu, setMenu] = useMenuVisibility();

  let button = (
    <Icon className={classes.icon} name='menu' color={props.color} size='24' />
  );
  if (menu)
    button = (
      <Icon
        className={classes.icon}
        name='cross'
        color={props.color}
        size='24'
      />
    );

  return (
    <button
      className={classes.menuIcon}
      type='button'
      onClick={() => {
        setMenu(!menu);
      }}
      aria-label='grid toggle'
    >
      {button}
    </button>
  );
};

export default memo(MenuToggle);
