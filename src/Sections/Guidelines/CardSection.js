import React from "react";
import { useTheme } from "react-jss";
import Card from "../../Components/Cards/Card";
import DragCardsThree from "../../Components/Cards/Variations/DragCardsThree/DragCardsThree";
import Spacer from "../../Utils/Spacer/Spacer";
import SpacerFortyHalf from "../../Utils/Spacer/Variations/SpacerFortyHalf";

const CardSection = () => {
  const theme = useTheme();

  return (
    <>
      <SpacerFortyHalf />
      <Card
        container
        status='construction'
        titleColor={theme.text}
        tagValue='Programming'
        tagsColor={theme.main}
        // src={"./img/USMobile-02"}
        background={theme.grey}
        backgroundHover={theme.hover}
        alt
        path='/'
      >
        Test of this title
      </Card>
      <Spacer container height={32} />
      <Card
        container
        right
        status='stop'
        titleColor={theme.text}
        tagValue='Programming'
        tagsColor={theme.secondary}
        // src={"./img/USMobile-02"}
        background={theme.grey}
        backgroundHover={theme.hover}
        alt
        path='/'
      >
        Test of this title
      </Card>
      <Spacer container height={80} />
      <DragCardsThree
        width='520px'
        text={{
          color: [theme.text, theme.text, theme.text],
          value: ["Title number 1", "Title number 2", "Title number 3"],
        }}
        tag={{
          color: [theme.main, theme.main, theme.main],
          value: ["Tag number 1", "Tag number 2", "Tag number 3"],
        }}
        background={{
          color: [theme.grey, theme.grey, theme.grey],
          hover: [theme.hover, theme.hover, theme.hover],
        }}
        status={["loading", "loading", "stop"]}
        src={["", "", ""]}
        alt={["", "", ""]}
      />
    </>
  );
};

export default CardSection;
