import React from "react";
import { useTheme } from "react-jss";
import Card from "../../Components/Cards/Card";
import DragCardsThree from "../../Components/Cards/Layouts/DragCardsThree";
import FooterCards from "../../Components/Cards/Layouts/FooterCards";
import GroupedCard from "../../Components/Cards/Layouts/GroupedCards";
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
        title={{
          color: [theme.text, theme.text, theme.text],
          value: ["Title number 1", "Title number 2", "Title number 3"],
        }}
        tag={{
          color: [theme.main, theme.main, theme.text],
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
      <Spacer container height={80} />
      <GroupedCard
        width='100%'
        title={{
          color: [theme.text, theme.text],
          value: ["Title number 1", "Title number 2"],
        }}
        tag={{
          color: [theme.main, theme.text],
          value: ["Tag number 1", "Tag number 2"],
        }}
        background={{
          color: [theme.grey, theme.grey],
          hover: [theme.hover, theme.hover],
        }}
        status={["loading", "loading"]}
        src={["", ""]}
        alt={["", ""]}
      />
      <SpacerFortyHalf />
      <GroupedCard
        left
        width='100%'
        title={{
          color: [theme.text, theme.text],
          value: ["Title number 1", "Title number 2"],
        }}
        tag={{
          color: [theme.main, theme.text],
          value: ["Tag number 1", "Tag number 2"],
        }}
        background={{
          color: [theme.grey, theme.grey],
          hover: [theme.hover, theme.hover],
        }}
        status={["loading", "loading"]}
        src={["", ""]}
        alt={["", ""]}
      />
      <Spacer container height={80} />
      <FooterCards
        footer
        title={{
          color: [theme.text, theme.text, theme.text],
          value: ["Previous", "Random", "Next"],
        }}
        // tag={{
        //   color: [theme.main, theme.main, theme.text],
        //   value: ["Tag number 1", "Tag number 2", "Tag number 3"],
        // }}
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
