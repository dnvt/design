import React from "react";
import ContainerStyle from "./Container-style";

const BigContainer = (props) => {
  const classes = ContainerStyle();

  return (
    <div className={classes.BigContainer}>
      <div className={props.center ? classes.flexCenter : classes.flexAround}>
        {props.children}
      </div>
    </div>
  );
};

export default BigContainer;
