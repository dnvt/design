import React from "react";
import { useTheme } from "react-jss";

import IntroProject from "../../Sections/Projects/Template/IntroProject";
import ThanksProject from "../../Sections/Projects/Template/ThanksProject";
import Spacer from "../../Utils/Spacer/Spacer";
import FooterCards from "../../Components/Cards/Layouts/FooterCards";
import ListofImages from "../../Sections/Projects/ListofImages";
import Vignettes from "../../Components/Vignettes/Vignettes";
import SpacerEightyHalf from "../../Utils/Spacer/Variations/SpacerEightyHalf";

export const Template = (props) => {
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
