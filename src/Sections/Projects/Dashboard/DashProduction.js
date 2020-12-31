import React from "react";
import Column from "../../../Components/Containers/Columns/Column";
import Container from "../../../Components/Containers/Container";
import Vignettes from "../../../Components/Vignettes/Vignettes";
import Font from "../../../Utils/Font/Font";
import Spacer from "../../../Utils/Spacer/Spacer";

const DashProduction = () => {
  return (
    <>
      <Container>
        <Spacer height={64} />
        <Font type='h4'>Production steps</Font>
        <Column spacer third>
          <Font type='h5'>Dashboard MVP 1</Font>
          <Font type='text'>
            Release the same amount of features available in the legacy
            dashboard so it can be quickly replaced and tested rapidly.
          </Font>
          <Font type='h5'>Dashboard MVP 2</Font>
          <Font type='text'>
            Release enough features to get a standalone app available on the App
            Store.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <Vignettes
        src=''
        alt='Each user story and design specs are always documented (here, in Notion).'
      />
    </>
  );
};

export default DashProduction;
