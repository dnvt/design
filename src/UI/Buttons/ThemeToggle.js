import React from "react";
import useDarkMode from "use-dark-mode";
import Icon from "../../Utils/Icon/Icon";
import ButtonStyle from "./Button-style";

const DarkModeToggle = (props) => {
  const classes = ButtonStyle();
  const darkMode = useDarkMode();

  let button = <Icon name='light' color={props.color} size='24' />;
  if (darkMode.value)
    button = <Icon name='dark' color={props.color} size='24' />;

  return (
    <button
      className={classes.menuIcon}
      type='button'
      onClick={darkMode.toggle}
      aria-label='theme color toggle'
    >
      {button}
    </button>
  );
};

export default DarkModeToggle;
