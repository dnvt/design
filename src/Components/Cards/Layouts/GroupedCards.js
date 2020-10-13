import React from "react";
import { useWindowSize } from "../../../Hooks/useWindowSize";
import Spacer from "../../../Utils/Spacer/Spacer";
import Container from "../../Containers/Container";
import Card from "../Card";

const GroupedCard = (props) => {
  const window = useWindowSize();

  let cardGroup = [];

  for (let i = 0; i < 2; i++) {
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
        width={props.width}
        height={props.height}
      >
        {props.title.value[i]}
      </Card>
    );
  }

  if (window.width > "992") {
    if (props.left) {
      return (
        <Container group left>
          {cardGroup}
        </Container>
      );
    }
    return <Container group>{cardGroup}</Container>;
  }

  return (
    <Container>
      {cardGroup[0]}
      <Spacer height={32} />
      {cardGroup[1]}
    </Container>
  );
};

export default GroupedCard;
