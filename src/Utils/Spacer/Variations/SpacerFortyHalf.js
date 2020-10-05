import React from "react";
import Container from "../../../Components/Containers/Container";
import { useWindowSize } from "../../../Hooks/useWindowSize";
import Spacer from "../Spacer";

const SpaceFortyHalf = () => {
  const window = useWindowSize();

  if (window.width > "992") {
    return (
      <>
        <Container>
          <Spacer height='40' />
        </Container>
      </>
    );
  }

  if (window.width > "768") {
    return (
      <>
        <Container>
          <Spacer height='32' />
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Spacer height='24' />
      </Container>
    </>
  );
};

export default SpaceFortyHalf;
