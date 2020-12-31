import React from "react";
import Column from "../../../Components/Containers/Columns/Column";
import Container from "../../../Components/Containers/Container";
import Vignettes from "../../../Components/Vignettes/Vignettes";
import Font from "../../../Utils/Font/Font";
import Spacer from "../../../Utils/Spacer/Spacer";

const DashContext = () => {
  return (
    <>
      <Container>
        <Spacer height={64} />
        <Font type='h4'>Context</Font>
        <Column spacer third>
          <Font type='text'>
            ile’s legacy dashboard is old, unresponsive, and it is very
            laborious to add new features and customer requirements to it.
          </Font>
        </Column>
        <Spacer height={32} />
      </Container>
      <Vignettes src='' alt='Legacy version of the dashboard' />
      <Container>
        <Spacer height={40} />
        <Column spacer third>
          <Font type='text'>
            How can we modernize our dashboard solution to new design standards?
            cross-platform compatible (desktop to smartphone stores) and st –no
            connectivity required?With our limited resources ~8 employees in
            total.
          </Font>
          <Font type='text'>
            irely reinvented our designs and processes, genuinely focused
            -platform components with a brand new graphic style- randing.Our
            Design System Library is made of React compone n be improved with
            the addition of new features.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <Vignettes src='' alt='Legacy version of the dashboard' />
    </>
  );
};

export default DashContext;
