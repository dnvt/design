import React from "react";
import Vignettes from "../../Components/Vignettes/Vignettes";

/// Images
import heroCoverPng from "../../Assets/Images/Coverjs/Work/CoverHero.png";
import heroCoverWebp from "../../Assets/Images/Coverjs/Work/CoverHero.webp";
import Spacer from "../../Utils/Spacer/Spacer";
import FooterCards from "../../Components/Cards/Layouts/FooterCards";
import { useTheme } from "react-jss";
import Container from "../../Components/Containers/Container";
import SpacerEightyHalf from "../../Utils/Spacer/Variations/SpacerEightyHalf";
import Font from "../../Utils/Font/Font";
import SpacerFortyHalf from "../../Utils/Spacer/Variations/SpacerFortyHalf";
import Column from "../../Components/Containers/Columns/Column";
import ExternalLink from "../../UI/Links/ExternalLink/ExternalLink";
import ListofImages from "../../Sections/Projects/ListofImages";

const Coverjs = () => {
  const theme = useTheme();

  return (
    <>
      <Vignettes hero src={[heroCoverPng, heroCoverWebp]} background='blue' />
      <Container>
        <SpacerEightyHalf />
        <Font type='h4'>Playground project</Font>
        <Font type='h1'>Album covers animated in javascript.</Font>
        <Spacer height={32} />
        <Font type='h5'>Javascript</Font>
        <Column spacer third>
          <Font type='text'>
            Product designer and creative director able to provide strong
            leadership on the development of product designs, marketing
            campaigns, user interfaces, and motion design.
          </Font>
        </Column>
        <ExternalLink
          path='https://dnvt.github.io/Coverjs/'
          color={theme.text}
          value='Visit project'
        />
      </Container>

      {/* /// List of images */}
      <ListofImages images={CONTENT.IMAGES} />

      {/* /// Thanks section */}
      <Container>
        <SpacerFortyHalf />
        <Column spacer third>
          <Font type='text'>
            Thanks to all the team at US Mobile for making this project
            happening. Thanks for @Nikita for implementing all the guidelines in
            React.
          </Font>
        </Column>
        <Font type='text'>Thanks for reading it.</Font>
      </Container>

      {/* Footer */}
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
  IMAGES: [
    {
      value: "1",
      src: "./img/library/Image1",
      alt: "alt",
    },
    {
      value: "2",
      src: "./img/library/Image2",
    },
    {
      value: "3",
      src: "./img/library/Image3",
    },
    {
      value: "4",
      src: "./img/library/Image4",
    },
    {
      value: "5",
      src: "./img/library/Image5",
      alt: "alt",
    },
  ],
};

export default Coverjs;
