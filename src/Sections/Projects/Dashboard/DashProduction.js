import React from "react";

import Column from "../../../Components/Containers/Columns/Column";
import Container from "../../../Components/Containers/Container";
import Device from "../../../Components/Devices/Device";
import Font from "../../../Utils/Font/Font";
import Spacer from "../../../Utils/Spacer/Spacer";

/// Images
import notionPng from "../../../Assets/Images/USMobile/System/Notion.png";
import notionWebp from "../../../Assets/Images/USMobile/System/Notion.webp";

const DashProduction = (props) => {
  return (
    <Container>
      <Spacer height={64} />
      <Font type='h4'>Production steps</Font>
      <Column spacer third>
        <Font type='h5' color={props.color}>
          Dashboard MVP 1
        </Font>
        <Font type='text'>
          Release the same amount of features available in the legacy dashboard
          so it can be quickly replaced and tested rapidly.
        </Font>
        <Spacer height={16} />
        <Font type='h5' color={props.color}>
          Dashboard MVP 2
        </Font>
        <Font type='text'>
          Release enough features to get a standalone app available on the App
          Store.
        </Font>
      </Column>
      <Spacer height={32} />
      <Device
        browserLess
        src={[notionPng, notionWebp]}
        alt='Each user story and design specs are always documented (here, in Notion).'
      />
      <Spacer height={24} />
      <Font type='legend'>
        Each user story and design specs are always documented (here, in
        Notion).
      </Font>
    </Container>
  );
};

export default DashProduction;
