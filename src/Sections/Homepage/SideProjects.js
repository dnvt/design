import React from "react";
import { useTheme } from "react-jss";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Card from "../../Components/Cards/Card";
import Container from "../../Components/Containers/Container";

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

export default SideProjects;
