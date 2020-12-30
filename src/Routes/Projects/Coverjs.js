import React from "react";
import { useTheme } from "react-jss";

import { IntroProject } from "./IntroProject";
import { ThanksProject } from "./ThanksProject";
import Vignettes from "../../Components/Vignettes/Vignettes";
import Spacer from "../../Utils/Spacer/Spacer";
import FooterCards from "../../Components/Cards/Layouts/FooterCards";
import SpacerEightyHalf from "../../Utils/Spacer/Variations/SpacerEightyHalf";
import ListofImages from "../../Sections/Projects/ListofImages";
/// Images
import heroCoverPng from "../../Assets/Images/Coverjs/Work/CoverHero.png";
import heroCoverWebp from "../../Assets/Images/Coverjs/Work/CoverHero.webp";

const Coverjs = () => {
  const theme = useTheme();

  /// Move this part as an Mother Component for all projects
  //
  return (
    <>
      <Vignettes hero src={[heroCoverPng, heroCoverWebp]} background='blue' />
      <SpacerEightyHalf />
      <IntroProject content={CONTENT.INTRO} />
      <ListofImages images={CONTENT.IMAGES} />
      <ThanksProject content={CONTENT.THANKS} />
      {/* TODO Move the Footer to an independent place */}
      <Spacer c height={80} />
      <FooterCards
        footer
        title={{
          color: [theme.text, theme.text, theme.text],
          value: ["Previous", "Random", "Next"],
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

const CONTENT = {
  /// Content for the upper part of the project
  INTRO: {
    section: "Fun project",
    title: "Album covers animated in javascript.",
    typeOfProject: "Javascript",
    paragraph: [
      {
        value: "1",
        paragraph:
        "Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
      },
    ],
    link: "https://dnvt.github.io/Coverjs/",
    button: "Visit project",
  },
  /// List of images for the project
  IMAGES: [
    {
      value: "1",
      src: [heroCoverPng, heroCoverWebp],
      alt: "alt",
    },
    {
      value: "2",
      src: [heroCoverPng, heroCoverWebp],
    },
    {
      value: "3",
      src: [heroCoverPng, heroCoverWebp],
    },
    {
      value: "4",
      src: [heroCoverPng, heroCoverWebp],
    },
    {
      value: "5",
      src: [heroCoverPng, heroCoverWebp],
      alt: "alt",
    },
  ],
  /// Content for the end part of the project
  THANKS: [
    {
      value: "1",
      paragraph:
      "Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
    },
    {
      value: "2",
      paragraph: "Thanks for reading it.",
    },
  ],
};

export default Coverjs;
