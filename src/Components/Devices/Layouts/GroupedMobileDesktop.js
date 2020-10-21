import React from "react";
import { useWindowSize } from "../../../Hooks/useWindowSize";
import Spacer from "../../../Utils/Spacer/Spacer";
import SpacerFullHeight from "../../../Utils/Spacer/Variations/SpacerFullHeight";
import Container from "../../Containers/Container";
import Device from "../Device";

const GroupedMobileDesktop = (props) => {
  const window = useWindowSize();

  if (window.width > "992")
    return (
      <>
        <Container big around>
          <Device browser src={props.srcDesktop[0]} />
          <SpacerFullHeight />
          <Device mobile src={props.srcMobile[0]} />
        </Container>

        <Spacer c height={80} />
        <Container big around>
          <Device mobile src={props.srcMobile[1]} />
          <SpacerFullHeight />
          <Device browser src={props.srcDesktop[1]} />
        </Container>
      </>
    );

  return (
    <>
      <Container big around>
        <Device browser src={props.srcDesktop[0]} />
      </Container>
      <Spacer c height={80} />

      <Container big center>
        <Device mobile src={props.srcMobile[0]} />
        <SpacerFullHeight />
        <Device mobile src={props.srcMobile[1]} />
      </Container>
      <Spacer c height={80} />

      <Container big around>
        <Device browser src={props.srcDesktop[1]} />
      </Container>
    </>
  );
};

export default GroupedMobileDesktop;
