import React from "react";
import Container from "../../../Containers/Container";
import Card from "../../Card";

const DragCardsThree = (props) => {
  let cardGroup = [];

  for (let i = 0; i < 3; i++) {
    cardGroup.push(
      <Card
        key={i}
        status={props.status[i]}
        src={props.src[i]}
        alt={props.alt}
        path={"/"}
        tagsColor={props.tag.color[i]}
        tagValue={props.tag.value[i]}
        background={props.background.color[i]}
        backgroundHover={props.background.hover[i]}
        titleColor={props.text.color[i]}
        width={props.width}
        height={props.height}
      >
        {props.text.value[i]}
      </Card>
    );
  }

  return (
    <Container drag three>
      {cardGroup}
    </Container>
  );
};

export default DragCardsThree;
