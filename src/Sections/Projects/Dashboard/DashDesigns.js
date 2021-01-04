import React from "react";
import { useTheme } from "react-jss";
import Column from "../../../Components/Containers/Columns/Column";
import Container from "../../../Components/Containers/Container";
import GroupedMobileDesktop from "../../../Components/Devices/Layouts/GroupedMobileDesktop";
import ExternalLink from "../../../UI/Links/ExternalLink/ExternalLink";
import Font from "../../../Utils/Font/Font";
import Spacer from "../../../Utils/Spacer/Spacer";

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
      <GroupedMobileDesktop srcDesktop={[]} srcMobile={[]} />
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
      <GroupedMobileDesktop srcDesktop={[]} srcMobile={[]} />
      <Container>
        <Spacer height={80} />
        <Font type='h5' color={props.color}>Play with a prototype</Font>
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
