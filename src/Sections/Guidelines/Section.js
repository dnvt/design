import React from "react";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Container from "../../Components/Containers/Container";

const Section = (props) => {
  return (
    <Container>
      <Spacer height={96} />
      {props.valueTitle && <Font type='h1'>{props.valueTitle}</Font>}
      <Font type='h3'>{props.value}</Font>
    </Container>
  );
};

export default Section;
