import React from "react";
import { useTheme } from "react-jss";

import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Container from "../../Components/Containers/Container";
import ExternalLink from "../../UI/Links/ExternalLink/ExternalLink";
import Column from "../../Components/Containers/Columns/Column";
import GroupedCard from "../../Components/Cards/Layouts/GroupedCards";

/// Images
import frame36Png from "../../Assets/Images/Frameio/36.png";
import frame36Webp from "../../Assets/Images/Frameio/36.webp";
import frame37Png from "../../Assets/Images/Frameio/37.png";
import frame37Webp from "../../Assets/Images/Frameio/37.webp";

const Introduction = () => {
  const theme = useTheme();

  return (
    <>
      {/* <Container style={{ marginTop: "-184px" }}> */}
      <Container>
        <Font type='h1'>
          Digital designer based in New York – currently redefining modern video
          workflow at Frame.io
        </Font>
        <Spacer height={40} />

        <Column spacer third>
          <Font type='text'>
            Product designer and creative director able to provide strong
            leadership on the development of product designs, marketing
            campaigns, user interfaces, and motion design.
          </Font>
        </Column>
        <ExternalLink path='/' color={theme.text} value='Get in touch' />
        <Spacer height={80} />
        <Font type='h2'>Latest releases</Font>
        <Spacer height={64} />
      </Container>
      <GroupedCard
        left
        width='100%'
        title={{
          color: ["#fff", "#fff"],
          value: ["Frame.io 3.7", "Frame.io 3.6"],
        }}
        tag={{
          color: [theme.constant.white, theme.constant.white],
          value: ["Product design", "Product design"],
        }}
        background={{
          color: [theme.white, theme.grey],
          hover: [theme.hover, theme.hover],
        }}
        status={["link", "link"]}
        src={[
          [frame37Png, frame37Webp],
          [frame36Png, frame36Webp],
        ]}
        alt={[
          "Introducing Frame.io v3.7 — Speed, Precision, Security.",
          "Introducing Frame.io v3.6: Rapidly Responsive. Powerfully Secure.",
        ]}
        href={[
          "https://blog.frame.io/2020/08/25/frameio-v3-7/",
          "https://blog.frame.io/2020/05/05/frameio-v3-6/",
        ]}
      />
    </>
  );
};
export default Introduction;
