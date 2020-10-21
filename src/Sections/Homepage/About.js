import React from "react";
import { useTheme } from "react-jss";
import Column from "../../Components/Containers/Columns/Column";
import Container from "../../Components/Containers/Container";
import Font from "../../Utils/Font/Font";
import Spacer from "../../Utils/Spacer/Spacer";

const About = () => {
  const theme = useTheme();
  return (
    <Container>
      <Font type='h2'>About</Font>
      <Spacer height={24} />
      <Font type='h5' color={theme.main}>
        Senior Product Designer at Frame.io
      </Font>
      <Column spacer third>
        <Font type='h3'>
          François Denavaut.
          <br /> Product & Creative Direction for the Internets
        </Font>
      </Column>
      <Spacer height={24} />
      <Column spacer third>
        <Font type='text'>
          Accomplished product designer and creative director able to provide
          strong leadership on the development of product designs, marketing
          campaigns, and user interfaces.
        </Font>
      </Column>
      <Column spacer third>
        <Font type='text'>
          Skilled project manager, capable of driving a project from inception
          to completion. Excellent communicator adept at taking complex topics
          and conveying them in a clear and concise manner understandable by
          both industry professionals and non-industry professionals.
        </Font>
      </Column>
    </Container>
  );
};

export default About;
