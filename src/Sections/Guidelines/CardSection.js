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

  const CONTENT = {
    FOOTER: [
      {
        key: "1",
        reverse: true,
        title: { color: theme.text, value: "Previous" },
        background: { color: theme.grey, hover: theme.hover },
        // status: "loading",
        // src: [systemPng, systemWebp],
        alt: "I'm an alt ",
        path: "/",
      },
      {
        key: "2",
        // reverse: false,
        title: { color: theme.text, value: "Random" },
        background: { color: theme.grey, hover: theme.hover },
        // status: "loading",
        // src: [starsFooterPng, starsFooterWebp],
        alt: "I'm an alt ",
        path: "/",
      },
      {
        key: "3",
        // reverse: false,
        title: { color: theme.text, value: "Next" },
        background: { color: theme.grey, hover: theme.hover },
        // status: "stop",
        // src: [matrixPng, matrixWebp],
        alt: "I'm an alt ",
        path: "/",
      },
    ],
  };

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
      <Spacer c height={32} />
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
      <Spacer c height={80} />
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
      <Spacer c height={80} />
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
      <Spacer c height={80} />
      <FooterCards content={CONTENT.FOOTER} />
    </>
  );
};

export default CardSection;
