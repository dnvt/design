import React, { memo } from "react";
import { useGridVisibility } from "../../Hooks/useGridVisibility";
import Icon from "../../Utils/Icon/Icon";
import ButtonStyle from "./Button-style";

const GridToggle = (props) => {
  const classes = ButtonStyle();
  const [visibility, setVisibility] = useGridVisibility();

  let button = (
    <Icon className={classes.icon} name='grid' color={props.color} size='24' />
  );
  if (visibility)
    button = (
      <Icon
        className={classes.icon}
        name='grid'
        color={props.active}
        size='24'
      />
    );

  return (
    <button
      className={classes.menuIcon}
      type='button'
      onClick={() => {
        setVisibility(!visibility);
      }}
      aria-label='grid toggle'
    >
      {button}
    </button>
  );
};

export default memo(GridToggle);
