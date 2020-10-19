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

export const Work = () => {
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
      <Spacer container height={80} />
      <DragMobileFour src={[]} />
      <Spacer container height={80} />
      <Container>
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
      </Container>
    </>
  );
};
