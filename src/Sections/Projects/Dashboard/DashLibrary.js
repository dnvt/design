import React from "react";
import Column from "../../../Components/Containers/Columns/Column";
import Container from "../../../Components/Containers/Container";
import DragFramelessFive from "../../../Components/Devices/Layouts/DragFramelessFive";
import Vignettes from "../../../Components/Vignettes/Vignettes";
import Font from "../../../Utils/Font/Font";
import Spacer from "../../../Utils/Spacer/Spacer";

const DashLibrary = () => {
  return (
    <>
      <Container>
        <Spacer height={104} />
        <Column spacer third>
          <Font type='h4'>Design library system for desktop & mobile</Font>
          <Font type='text'>
            I created a Design Library of fully responsive components for US
            Mobile to improve the pace of front-end and design deployment.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <Vignettes
        src=''
        alt='Regularly updated and documented design library, constantly updated'
      />
      <Spacer c height={40} />
      <Vignettes src='' alt='Guidelines applied to the mobile profiles' />
      <Spacer c height={64} />
      <Container>
        <Font type='h4'>A standalone app for the App Store</Font>
      </Container>
      <Spacer c height={40} />
      <DragFramelessFive src={[]} />
      <Container>
        <Spacer height={80} />
        <Column spacer third>
          <Font type='text'>
            We are only half-way through the deployment of our solution, but
            already, the team is more excited to develop new features onto it,
            using these new technologies that work.˝
          </Font>
          <Font type='text'>
            Customers are very responsive and pleased by the newly gained
            clarity of their dashboard, the new features, and the level of
            customization they can add to it.
          </Font>
          <Font type='text'>Thanks for reading.</Font>
        </Column>
      </Container>
    </>
  );
};

export default DashLibrary;
