import React from "react";
import Column from "../../../Components/Containers/Columns/Column";
import Container from "../../../Components/Containers/Container";
import Font from "../../../Utils/Font/Font";
import Spacer from "../../../Utils/Spacer/Spacer";
import SpacerEightyHalf from "../../../Utils/Spacer/Variations/SpacerEightyHalf";

const DashIntroduction = () => {
  return (
    <>
      <SpacerEightyHalf />
      <Container>
        <Font type='h4'>Head of Design</Font>
        <Font type='h1'>
          US Mobile PWA <br />
          Dashboard use case
        </Font>
        <Spacer height={32} />
        <Font type='h5'>Illustrations - Interface - Design systems</Font>
        <Column spacer third>
          <Font type='text'>
            US Mobile is a telecom company that sells T-Mobile and Verizon
            networks. We focus on highly customizable and affordable plans for
            your devices.
          </Font>
          <Font type='text'>
            As the Lead Product Designer and Head of Design at US Mobile, I am
            directly involved in defining the product strategy, responsible for
            designing the UI and product usability. Finally, I am supervising
            our front-end team to ensure the quality of the result.
          </Font>
        </Column>
      </Container>
    </>
  );
};

export default DashIntroduction;
