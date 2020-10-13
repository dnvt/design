import React from "react";
import Container from "../../Containers/Container";
import Device from "../Device";

const DragMobileFour = (props) => {
  return (
    <Container drag four>
      <Device mobile src={props.src[0]} />
      <Device mobile src={props.src[1]} />
      <Device mobile src={props.src[2]} />
      <Device mobile src={props.src[3]} />
    </Container>
  );
};

export default DragMobileFour;
