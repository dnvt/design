import React from "react";
import { useTheme } from "react-jss";

import Header from "../../Components/Header/Header";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { Description } from "./Description";
import Footer from "../../Components/Footer/Footer";
import Container from "../../Components/Containers/Container";

const NavigationSection = () => {
  const window = useWindowSize();
  const theme = useTheme;
  return (
    <>
      <Header position />
      <Container>
        <Description
          width={window.width}
          color={theme.legend}
          valueLarge={DESC.large.header}
          valueMedium={DESC.medium.header}
          valueSmall={DESC.small.header}
        />
      </Container>
      <Footer />
      <Container>
        <Description
          width={window.width}
          color={theme.legend}
          valueLarge={DESC.large.header}
          valueMedium={DESC.medium.header}
          valueSmall={DESC.small.header}
        />
      </Container>
    </>
  );
};

export default NavigationSection;

const DESC = {
  large: {
    header: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    footer: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
  medium: {
    header: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    footer: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
  small: {
    header: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    footer: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
};
