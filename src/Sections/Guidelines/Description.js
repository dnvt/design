import React from "react";
import Font from "../../Utils/Font/Font";

export const Description = (props) => {
  let element = [];

  switch (true) {
    case props.width > "1359":
      props.valueLarge.forEach((el) => {
        element.push(
          <div key={el}>
            {el}
            <br />
          </div>
        );
      });
      break;
    case props.width > "767":
      props.valueMedium.forEach((el) => {
        element.push(
          <div key={el}>
            {el}
            <br />
          </div>
        );
      });
      break;
    default:
      props.valueSmall.forEach((el) => {
        element.push(
          <div key={el}>
            {el}
            <br />
          </div>
        );
      });
      break;
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        height: "auto",
        padding: "0",
        margin: "0 auto",
        zIndex: "1",
      }}
    >
      <Font color={props.color} type='legend'>
        {element}
      </Font>
    </div>
  );
};
