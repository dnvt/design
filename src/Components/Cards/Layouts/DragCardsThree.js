import React from "react";
import { useWindowSize } from "../../../Hooks/useWindowSize";
import Container from "../../Containers/Container";
import Card from "../Card";

const DragCardsThree = (props) => {
  const window = useWindowSize();

  let cardWidth = "288px";
  if (window.width > "1360") {
    cardWidth = "544px";
  }
  if (window.width > "992") {
    cardWidth = "448px";
  }

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
        titleColor={props.title.color[i]}
        width={cardWidth}
        height={props.height}
      >
        {props.title.value[i]}
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
