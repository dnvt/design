import React from "react";
import Container from "../../Containers/Container";
import Card from "../Card";

const DragCardsThree = (props) => {
  const cardGroup = props.content.map(CardUnit);

  return <Container footer>{cardGroup}</Container>;
};

const CardUnit = (props) => {
  return (
    <Card
      key={props.key}
      reverse={props.reverse}
      status={props.status}
      src={props.src}
      alt={props.alt}
      path={props.path}
      background={props.background.color}
      backgroundHover={props.background.hover}
      titleColor={props.title.color}
      width='auto'
    >
      {props.title.value}
    </Card>
  );
};

export default DragCardsThree;
