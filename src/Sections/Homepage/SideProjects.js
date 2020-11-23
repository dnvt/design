import React from "react";
import { useTheme } from "react-jss";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Card from "../../Components/Cards/Card";
import Container from "../../Components/Containers/Container";

/// Images
import starsPng from "../../Assets/Images/Stars/Stars.png";
import starsWebp from "../../Assets/Images/Stars/Stars.webp";
import coverPng from "../../Assets/Images/Coverjs/Coverjs.png";
import coverWebp from "../../Assets/Images/Coverjs/Coverjs.webp";

const SideProjects = () => {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Font type='h2'>Play Ground</Font>
        <Spacer height={104} />
        <Card
          status='construction'
          titleColor={theme.text}
          tagValue='Animation, Illustration'
          tagsColor={theme.main}
          src={[starsPng, starsWebp]}
          background={theme.grey}
          backgroundHover={theme.hover}
          alt='Animation made with Lucas M Matholaz'
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
          src={[coverPng, coverWebp]}
          background={theme.grey}
          backgroundHover={theme.hover}
          alt='Covers animated in CSS and Javascript'
          path='/work/coverjs'
        >
          Coverjs
        </Card>
        <Spacer height={40} />
        <Card
          height={216}
          titleColor={theme.text}
          tagValue='Programming'
          tagsColor={theme.main}
          // src={[coverPng, coverWebp]}
          background={theme.grey}
          backgroundHover={theme.hover}
          alt='Coming soon! more playground projects'
          path='/'
        >
          Coming soon
        </Card>
      </Container>
    </>
  );
};

export default SideProjects;
