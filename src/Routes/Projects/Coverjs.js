import React from "react";
import { useTheme } from "react-jss";

/// Images
import heroCoverPng from "../../Assets/Images/Coverjs/Work/CoverHero.png";
import heroCoverWebp from "../../Assets/Images/Coverjs/Work/CoverHero.webp";
import wasteFooterPng from "../../Assets/Images/Footer/Waste.png";
import wasteFooterWebp from "../../Assets/Images/Footer/Waste.webp";
import starsFooterPng from "../../Assets/Images/Footer/Stars.png";
import starsFooterWebp from "../../Assets/Images/Footer/Stars.webp";
import coversFooterPng from "../../Assets/Images/Footer/Coverjs.png";
import coversFooterWebp from "../../Assets/Images/Footer/Coverjs.webp";
import { Template } from "./Template";

const Coverjs = () => {
  const theme = useTheme();
  /// Content for the Project
  const CONTENT = {
    /// Introduction image
    HERO: [heroCoverPng, heroCoverWebp],
    /// No color makes it default grey
    // HEROBACKGROUND: theme.main,
    /// Content for the upper part of the project
    INTRO: {
      section: "Fun project",
      title: "Album covers animated in javascript.",
      typeOfProject: "Javascript",
      theme: theme.main,
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
    /// Test with the footer
    FOOTER: [
      {
        key: "1",
        reverse: true,
        title: { color: theme.text, value: "Previous" },
        background: { color: theme.background, hover: theme.hover },
        status: "loading",
        src: [wasteFooterPng, wasteFooterWebp],
        alt: "I'm an alt ",
        path: "/",
      },
      {
        key: "2",
        // reverse: false,
        title: { color: theme.text, value: "Random" },
        background: { color: theme.grey, hover: theme.hover },
        status: "loading",
        src: [starsFooterPng, starsFooterWebp],
        alt: "I'm an alt ",
        path: "/",
      },
      {
        key: "3",
        // reverse: false,
        title: { color: theme.text, value: "Next" },
        background: { color: theme.grey, hover: theme.hover },
        status: "stop",
        src: [coversFooterPng, coversFooterWebp],
        alt: "I'm an alt ",
        path: "/",
      },
    ],
  };

  return <Template {...CONTENT} />;
};

export default Coverjs;
