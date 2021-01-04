import React from "react";

import Column from "../../../Components/Containers/Columns/Column";
import Container from "../../../Components/Containers/Container";
import DragFramelessFive from "../../../Components/Devices/Layouts/DragFramelessFive";
import Vignettes from "../../../Components/Vignettes/Vignettes";
import Font from "../../../Utils/Font/Font";
import Spacer from "../../../Utils/Spacer/Spacer";

//  Images
/// Library
import Library01Png from "../../../Assets/Images/USMobile/System/Library-01.png";
import Library01Webp from "../../../Assets/Images/USMobile/System/Library-01.webp";
import Library02Png from "../../../Assets/Images/USMobile/System/Library-02.png";
import Library02Webp from "../../../Assets/Images/USMobile/System/Library-02.webp";
/// App Store
import App01Png from "../../../Assets/Images/USMobile/System/App-01.png";
import App02Png from "../../../Assets/Images/USMobile/System/App-02.png";
import App03Png from "../../../Assets/Images/USMobile/System/App-03.png";
import App04Png from "../../../Assets/Images/USMobile/System/App-04.png";
import App05Png from "../../../Assets/Images/USMobile/System/App-05.png";
import App01Webp from "../../../Assets/Images/USMobile/System/App-01.webp";
import App02Webp from "../../../Assets/Images/USMobile/System/App-02.webp";
import App03Webp from "../../../Assets/Images/USMobile/System/App-03.webp";
import App04Webp from "../../../Assets/Images/USMobile/System/App-04.webp";
import App05Webp from "../../../Assets/Images/USMobile/System/App-05.webp";

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
        src={[Library01Png, Library01Webp]}
        alt='Regularly updated and documented design library, constantly updated'
      />
      <Spacer c height={40} />
      <Vignettes
        src={[Library02Png, Library02Webp]}
        alt='Guidelines applied to the mobile profiles'
      />
      <Spacer c height={64} />
      <Container>
        <Font type='h4'>A standalone app for the App Store</Font>
      </Container>
      <Spacer c height={40} />
      <DragFramelessFive
        src={[
          [App01Png, App01Webp],
          [App02Png, App02Webp],
          [App03Png, App03Webp],
          [App04Png, App04Webp],
          [App05Png, App05Webp],
        ]}
      />
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
        <Font type='h3'>
          <span role='img' aria-label='cheers'>
            ✌🏽
          </span>
        </Font>
      </Container>
    </>
  );
};

export default DashLibrary;
