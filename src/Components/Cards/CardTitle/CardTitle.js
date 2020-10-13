import React from "react";
import Font from "../../../Utils/Font/Font";
import CardTitleStyle from "./CardTitle-style";

const CardTitle = (props) => {
  const classes = CardTitleStyle();

  return (
    <>
      <div
        className={
          props.right ? classes.projectTitleRight : classes.projectTitle
        }
        style={props.reverse && { transform: "scaleX(-1)", right: "0" }}
      >
        <Font type='h5' color={props.tagColor} margin='0 0 -8px 0'>
          {props.tagValue}
        </Font>
        <Font type='h3' color={props.titleColor} hover={props.hover}>
          {props.children}
        </Font>
      </div>
    </>
  );
};

export default CardTitle;
