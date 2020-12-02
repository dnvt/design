import React from "react";
import { useTheme } from "react-jss";
import Column from "../../Components/Containers/Columns/Column";
import Container from "../../Components/Containers/Container";
import Vignettes from "../../Components/Vignettes/Vignettes";
import Font from "../../Utils/Font/Font";
import Spacer from "../../Utils/Spacer/Spacer";
import SpacerEightyHalf from "../../Utils/Spacer/Variations/SpacerEightyHalf";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <>
      <Vignettes hero src={[]} background={theme.usmobile.background} />

      {/* /// Introduction */}
      <Container>
        <SpacerEightyHalf />
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

      {/* /// Context */}
      <Container>
        <Spacer height={64} />
        <Font type='h4'>Context</Font>
        <Column spacer third>
          <Font type='text'>
            US Mobile’s legacy dashboard is old, unresponsive, and it is very
            laborious to add new features and customer requirements to it.
          </Font>
        </Column>
        <Spacer height={32} />
        <Vignettes src='' alt='Legacy version of the dashboard' />
        <Spacer height={40} />
        <Column spacer third>
          <Font type='text'>
            How can we modernize our dashboard solution to new design standards?
            Making it a cross-platform compatible (desktop to smartphone stores)
            and standalone app–no connectivity required? With our limited
            resources ~ 8 employees in total.
          </Font>
          <Font type='text'>
            We entirely reinvented our designs and processes, genuinely focused
            around cross-platform components with a brand new graphic
            style-guides and branding. Our Design System Library is made of
            React components, that can be improved with the addition of new
            features.
          </Font>
        </Column>
        <Spacer height={24} />
        <Vignettes src='' alt='Legacy version of the dashboard' />
      </Container>

      {/* /// Context */}
      <Container>
        <Spacer height={64} />
        <Font type='h4'>Design process</Font>
        <Column spacer third>
          <Font type='text'>
            As a tiny team, we do not have the resources to facilitate customer
            interviews within the design process.
          </Font>
          <Font type='text'>
            Therefore, I’m adapting design thinking processes to what’s
            feasible. I extensively draft sketches and concepts to challenge our
            assumptions. I unfold the iterative and testings loops internally,
            among all company stakeholders.
          </Font>
          <Font type='text'>
            When finally satisfied, I use video recording tools like Hotjar,
            Google Analytics data, and customer feedback from forms and emails.
            It serves to track problems, misunderstandings and to gather new
            hypotheses and suggestions.
          </Font>
        </Column>
        <Spacer height={32} />
      </Container>

      {/* /// To be continued... */}
      <Container>
        <Spacer height={40} />
        <Font type='h2'>To be continued...</Font>
      </Container>
    </>
  );
};

export default Dashboard;
