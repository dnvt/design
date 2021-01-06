import React from "react";
import { useTheme } from "react-jss";

import Column from "../../../Components/Containers/Columns/Column";
import Container from "../../../Components/Containers/Container";
import GroupedMobileDesktop from "../../../Components/Devices/Layouts/GroupedMobileDesktop";
import ExternalLink from "../../../UI/Links/ExternalLink/ExternalLink";
import Font from "../../../Utils/Font/Font";
import Spacer from "../../../Utils/Spacer/Spacer";

/// Images
import desktopDash01Png from "../../../Assets/Images/USMobile/System/desk-dashboard-01.png";
import desktopDash01Webp from "../../../Assets/Images/USMobile/System/desk-dashboard-01.webp";
import desktopDash02Png from "../../../Assets/Images/USMobile/System/desk-dashboard-02.png";
import desktopDash02Webp from "../../../Assets/Images/USMobile/System/desk-dashboard-02.webp";
// import desktopDash03Png from "../../../Assets/Images/USMobile/System/desk-dashboard-03.png";
// import desktopDash03Webp from "../../../Assets/Images/USMobile/System/desk-dashboard-03.webp";
import desktopDash04Png from "../../../Assets/Images/USMobile/System/desk-dashboard-04.png";
import desktopDash04Webp from "../../../Assets/Images/USMobile/System/desk-dashboard-04.webp";
import desktopDash05Png from "../../../Assets/Images/USMobile/System/desk-dashboard-05.png";
import desktopDash05Webp from "../../../Assets/Images/USMobile/System/desk-dashboard-05.webp";

import mobileDash01Png from "../../../Assets/Images/USMobile/System/mobile-dashboard-01.png";
import mobileDash01Webp from "../../../Assets/Images/USMobile/System/mobile-dashboard-01.webp";
import mobileDash02Png from "../../../Assets/Images/USMobile/System/mobile-dashboard-02.png";
import mobileDash02Webp from "../../../Assets/Images/USMobile/System/mobile-dashboard-02.webp";
// import mobileDash03Png from "../../../Assets/Images/USMobile/System/mobile-dashboard-03.png";
// import mobileDash03Webp from "../../../Assets/Images/USMobile/System/mobile-dashboard-03.webp";
import mobileDash04Png from "../../../Assets/Images/USMobile/System/mobile-dashboard-04.png";
import mobileDash04Webp from "../../../Assets/Images/USMobile/System/mobile-dashboard-04.webp";
import mobileDash05Png from "../../../Assets/Images/USMobile/System/mobile-dashboard-05.png";
import mobileDash05Webp from "../../../Assets/Images/USMobile/System/mobile-dashboard-05.webp";

const DashDesigns = (props) => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Spacer height={64} />
        <Column spacer third>
          <Font type='h4'>Design and Details</Font>
          <Font type='text'>
            Some detail of screens designed for the dashboard, shown on both
            desktop and mobile mediums.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <GroupedMobileDesktop
        srcDesktop={[
          [desktopDash01Png, desktopDash01Webp],
          [desktopDash02Png, desktopDash02Webp],
        ]}
        srcMobile={[
          [mobileDash01Png, mobileDash01Webp],
          [mobileDash02Png, mobileDash02Webp],
        ]}
      />
      <Container>
        <Spacer height={32} />
        <Column spacer third>
          <Font type='h5'>
            e.g. of design decision to help solve a business problem
          </Font>
          <Font type='text'>
            To allow future customer line features, without changing the design
            again intensely, we decided to use horizontal navigation rather than
            a side one. It would be more comfortable at first to display no
            navigation/features and add them up horizontally rather than having
            empty side navigation that would expend only slowly in the future.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <GroupedMobileDesktop srcDesktop={[
          [desktopDash04Png, desktopDash04Webp],
          [desktopDash05Png, desktopDash05Webp],
        ]}
        srcMobile={[
          [mobileDash04Png, mobileDash04Webp],
          [mobileDash05Png, mobileDash05Webp],
        ]} />
      <Container>
        <Spacer height={80} />
        <Font type='h5' color={props.color}>
          Play with a prototype
        </Font>
        <ExternalLink
          path='/'
          color={theme.text}
          value='Prototype of the activation flow'
        />
      </Container>
    </>
  );
};

export default DashDesigns;
