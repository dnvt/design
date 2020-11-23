import React, { memo } from "react";
import Container from "../../Containers/Container";
import Device from "../Device";

const DragFramelessFive = (props) => {
  if (props.src) {
    return (
      <Container drag five>
        <Device frameless src={props.src[0]} />
        <Device frameless src={props.src[1]} />
        <Device frameless src={props.src[2]} />
        <Device frameless src={props.src[3]} />
        <Device frameless src={props.src[4]} />
      </Container>
    );
  } else {
    console.warn("add your src props");
    return null;
  }
};

export default memo(DragFramelessFive);
