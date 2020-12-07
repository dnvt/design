import React from "react";

import Font from "../Font";
import NumberedListStyle from "./NumberedList-style";

const NumberedList = (props) => {
  const classes = NumberedListStyle();

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.listNumber}>
        <Font type='h5'>{props.number + "."}</Font>
      </div>
      {props.children}
    </div>
  );
};

export default NumberedList;
