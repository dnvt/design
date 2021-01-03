import React from "react";
import { useTheme } from "react-jss";

import IntroProject from "./IntroProject";
import ThanksProject from "./ThanksProject";
import Spacer from "../../../Utils/Spacer/Spacer";
import FooterCards from "../../../Components/Cards/Layouts/FooterCards";
import ListofImages from "../ListofImages";
import Vignettes from "../../../Components/Vignettes/Vignettes";
import SpacerEightyHalf from "../../../Utils/Spacer/Variations/SpacerEightyHalf";

const Template = (props) => {
  const theme = useTheme();
  return (
    <>
      <Vignettes
        hero
        src={props.HERO}
        background={props.HEROBACKGROUND || theme.outline}
      />
      <SpacerEightyHalf />
      <IntroProject content={props.INTRO} />
      <ListofImages images={props.IMAGES} />
      <ThanksProject content={props.THANKS} />
      <Spacer c height={80} />
      <FooterCards content={props.FOOTER} />
    </>
  );
};

export default Template;
