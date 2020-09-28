import React from "react";
import Device from "../../Components/Devices/Device";
import browserP from "../../Assets/Images/Guidelines/browser1.png";
import browserW from "../../Assets/Images/Guidelines/browser1.webp";
import SpacerFullHeight from "../../Utils/Spacer/Variations/SpacerFullHeight";
import Spacer from "../../Utils/Spacer/Spacer";
import Container from "../../Components/Containers/Container";
import { useWindowSize } from "../../Hooks/useWindowSize";

export const DeviceSection = () => {
  const window = useWindowSize();
  const images = [browserP, browserW];

  if (window.width > "992")
    return (
      <>
        <Container>
          <Spacer height={40} />
        </Container>
        <Container big around>
          <Device mobile />
          <SpacerFullHeight />
          <Device browser />
        </Container>
        <Container>
          <Spacer height={80} />
        </Container>
        <Container big around>
          <Device browser />
          <SpacerFullHeight />
          <Device mobile />
        </Container>
        <Container>
          <Spacer height={80} />
        </Container>
        <Container drag frameless>
          <Device frameless />
          <Device frameless />
          <Device frameless />
          <Device frameless />
          <Device frameless />
        </Container>
      </>
    );

  // Mobile

  return (
    <>
      <Container>
        <Spacer height={40} />
      </Container>
      <Container big around>
        <Device browser />
      </Container>
      <Container>
        <Spacer height={80} />
      </Container>
      <Container big center>
        <Device mobile />
        <SpacerFullHeight />
        <Device mobile />
      </Container>
      <Container>
        <Spacer height={80} />
      </Container>
      <Container big around>
        <Device browser />
      </Container>
      <Container>
        <Spacer height={80} />
      </Container>
      <Container drag frameless>
        <Device frameless />
        <Device frameless />
        <Device frameless />
        <Device frameless />
        <Device frameless />
      </Container>
    </>
  );
};
