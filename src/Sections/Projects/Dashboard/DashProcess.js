import React from "react";
import Column from "../../../Components/Containers/Columns/Column";
import Container from "../../../Components/Containers/Container";
import Font from "../../../Utils/Font/Font";
import Spacer from "../../../Utils/Spacer/Spacer";

const DashProcess = () => {
  return (
    <Container>
      <Spacer height={64} />
      <Font type='h4'>Design process</Font>
      <Column spacer third>
        <Font type='text'>
          As a tiny team, we do not have the resources to facilitate customer
          interviews within the design process.
        </Font>
        <Font type='text'>
          Therefore, I’m adapting design thinking processes to what’s feasible.
          I extensively draft sketches and concepts to challenge our
          assumptions. I unfold the iterative and testings loops internally,
          among all company stakeholders.
        </Font>
        <Font type='text'>
          When finally satisfied, I use video recording tools like Hotjar,
          Google Analytics data, and customer feedback from forms and emails. It
          serves to track problems, misunderstandings and to gather new
          hypotheses and suggestions.
        </Font>
      </Column>
    </Container>
  );
};

export default DashProcess;
