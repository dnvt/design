import React from "react";

// import HomepageStyle from "./Homepage-style";
import Spacer from "../Utils/Spacer/Spacer";
import FontHero from "../Components/Hero/FontHero";
import USMWork from "../Sections/Homepage/USMWork";
import Introduction from "../Sections/Homepage/Introduction";
import Font from "../Utils/Font/Font";
import Column from "../Components/Containers/Columns/Column";
import GroupedCard from "../Components/Cards/Layouts/GroupedCards";
import SpacerFortyHalf from "../Utils/Spacer/Variations/SpacerFortyHalf";
import Card from "../Components/Cards/Card";
import Container from "../Components/Containers/Container";
import { useTheme } from "react-jss";

const SelectedWork = (props) => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Spacer height={104} />
        <Font type='h4'>Selected</Font>
        <Column spacer third>
          <Font type='text'>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Sed posuere consectetur est at lobortis. Etiam porta sem
            malesuada magna mollis euismod.
          </Font>
        </Column>
        <Spacer height={40} />
      </Container>
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
    </>
  );
};

const SideProjects = (props) => {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Spacer height={184} />
        <Font type='h2'>Side Projects</Font>
        <Spacer height={104} />
        <Card
          status='construction'
          titleColor={theme.text}
          tagValue='Animation, Illustration'
          tagsColor={theme.main}
          // src={"./img/USMobile-02"}
          background={theme.grey}
          backgroundHover={theme.hover}
          alt
          path='/'
        >
          A Park for the Homeless
          <br />
          in the stars
        </Card>
        <Spacer height={40} />
        <Card
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
          Cover.js
        </Card>
        <Spacer height={40} />
        <Card
          height={216}
          titleColor={theme.text}
          tagValue='Programming'
          tagsColor={theme.main}
          // src={"./img/USMobile-02"}
          background={theme.grey}
          backgroundHover={theme.hover}
          alt
          path='/'
        >
          Coming soon
        </Card>
      </Container>
    </>
  );
};

const Homepage = () => {
  return (
    <>
      <Spacer container height={8} />
      <FontHero value='François' />
      <Introduction />
      <Spacer container height={184} />
      <USMWork />
      <SelectedWork />
      <SideProjects />
    </>
  );
};

export default Homepage;
