import React from "react";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Column from "../../Components/Containers/Columns/Column";
import Container from "../../Components/Containers/Container";
import DragCardsThree from "../../Components/Cards/Layouts/DragCardsThree";
import { useTheme } from "react-jss";

/// Images
import airbusPng from "../../Assets/Images/Airbus/Airbus.webp";
import airbusWebp from "../../Assets/Images/Airbus/Airbus.webp";
import siemensPng from "../../Assets/Images/Siemens/Siemens.webp";
import siemensWebp from "../../Assets/Images/Siemens/Siemens.webp";
import telekomPng from "../../Assets/Images/Telekom/Telekom.webp";
import telekomWebp from "../../Assets/Images/Telekom/Telekom.webp";

const PrivateWork = () => {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Font type='h4'>Protected work</Font>
        <Column spacer third>
          <Font type='text'>
            As a freelancer in Berlin, I worked on several NDA projects as an
            interaction and motion designer. I defined and unified the behavior
            for interfaces on mediums like airplane seats, cookwear and TV
            screens.
            <br /> Contact me to learn more about these projects.
          </Font>
        </Column>
        <Spacer height={40} />
      </Container>
      <DragCardsThree
        title={{
          color: [
            theme.constant.black,
            theme.constant.white,
            theme.constant.white,
          ],
          value: ["Airbus", "Siemens", "Telekom"],
        }}
        tag={{
          color: [
            theme.constant.black,
            theme.constant.white,
            theme.constant.white,
          ],
          value: [
            "Rethinking the in-flight experience",
            "Rethinking home applicances' interface",
            "Rethinking TV as a connected device",
          ],
        }}
        background={{
          color: [theme.grey, theme.grey, theme.grey],
          hover: [theme.hover, theme.hover, theme.hover],
        }}
        status={["stop", "stop", "stop"]}
        src={[
          [airbusPng, airbusWebp],
          [siemensPng, siemensWebp],
          [telekomPng, telekomWebp],
        ]}
        alt={["In-flight experience", "Kitchen eperience", "TV experience"]}
      />
    </>
  );
};

export default PrivateWork;
