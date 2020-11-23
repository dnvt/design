import React from "react";
import { useTheme } from "react-jss";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Container from "../../Components/Containers/Container";
import Column from "../../Components/Containers/Columns/Column";
import ExternalLink from "../../UI/Links/ExternalLink/ExternalLink";
import InternalLink from "../../UI/Links/InternalLink/InternalLink";
import { useWindowSize } from "../../Hooks/useWindowSize";
import Card from "../../Components/Cards/Card";
import DragMobileFour from "../../Components/Devices/Layouts/DragMobileFour";

/// Images
// Mobile
import phone01Png from "../../Assets/Images/USMobile/Phone/phone01.png";
import phone01Webp from "../../Assets/Images/USMobile/Phone/phone01.webp";
import phone02Png from "../../Assets/Images/USMobile/Phone/phone02.png";
import phone02Webp from "../../Assets/Images/USMobile/Phone/phone02.webp";
import phone03Png from "../../Assets/Images/USMobile/Phone/phone03.png";
import phone03Webp from "../../Assets/Images/USMobile/Phone/phone03.webp";
import phone04Png from "../../Assets/Images/USMobile/Phone/phone04.png";
import phone04Webp from "../../Assets/Images/USMobile/Phone/phone04.webp";

// Cards
import brandingPng from "../../Assets/Images/USMobile/Cards/Branding.png";
import brandingWebp from "../../Assets/Images/USMobile/Cards/Branding.webp";
import matrixPng from "../../Assets/Images/USMobile/Cards/Matrix.png";
import matrixWebp from "../../Assets/Images/USMobile/Cards/Matrix.webp";
import systemPng from "../../Assets/Images/USMobile/Cards/System.png";
import systemWebp from "../../Assets/Images/USMobile/Cards/System.webp";
import FontHero from "../../Components/Hero/FontHero";

const USMWork = () => {
  const theme = useTheme();
  const window = useWindowSize();

  let spacerWidth = [];

  switch (true) {
    case window.width > 1360:
      spacerWidth = "544px";
      break;
    case window.width > 992:
      spacerWidth = "448px";
      break;
    case window.width > 768:
      spacerWidth = "100%";
      break;
    default:
      break;
  }

  return (
    <>
      <Container>
        <Font type='h2'>Work</Font>
      </Container>
      <FontHero value='2016-19' />
      <Container>
        <Spacer height={40} />
        <Column spacer half>
          <Font type='h3'>US Mobile, cellular plans for everybody.</Font>
        </Column>
        <Spacer height={24} />
        <Column>
          <Font type='text'>
            Lead all creative direction organizationally. Develop the product
            strategy, set product design requirements and create priority maps
            based on end-user data. Drive integration efforts with Verizon’s
            carrier platform while maintaining continued service integration
            with T-Mobile.
          </Font>
          <Font type='text' width={spacerWidth}>
            Lead to the expansion of the organization from 15,000 customers to
            more than 60,000 users, which occurred primarily through word of
            mouth from product experience.
          </Font>
        </Column>
        <div style={{ display: "flex" }}>
          <InternalLink
            path='/'
            value='Read use case'
            color={theme.text}
            hover={theme.main}
          />
          <ExternalLink
            path='/'
            color={theme.text}
            value='Visit usmobile.com'
          />
        </div>
      </Container>
      <Spacer c height={80} />
      <DragMobileFour
        src={[
          [phone01Png, phone01Webp],
          [phone02Png, phone02Webp],
          [phone03Png, phone03Webp],
          [phone04Png, phone04Webp],
        ]}
      />
      <Spacer c height={104} />
      <Container>
        <Card
          status='construction'
          titleColor={theme.text}
          tagValue='Design system, UI, Illustrations'
          src={[brandingPng, brandingWebp]}
          tagsColor={theme.usmobile.text}
          background={theme.usmobile.background}
          backgroundHover={theme.usmobile.hover}
          alt='Branding image for US Mobile'
          path='/'
        >
          Creative direction <br /> & design guidelines
        </Card>
        <Spacer height={32} />
        <Card
          status='construction'
          titleColor={theme.text}
          tagValue='Design system, UI, Motion Design'
          src={[matrixPng, matrixWebp]}
          tagsColor={theme.usmobile.text}
          background={theme.usmobile.background}
          backgroundHover={theme.usmobile.hover}
          alt='US Mobile interactive Matrix of prices'
          path='/'
        >
          Build your plan
        </Card>
        <Spacer height={32} />
        <Card
          right
          status='construction'
          titleColor={theme.text}
          tagValue='UX, UI, Design system'
          src={[systemPng, systemWebp]}
          tagsColor={theme.usmobile.text}
          background={theme.usmobile.background}
          backgroundHover={theme.usmobile.hover}
          alt="US Mobile design system, for mobile and desktop"
          path='/'
        >
          US Mobile Dashboard use case
        </Card>
      </Container>
    </>
  );
};

export default USMWork;
