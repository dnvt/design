import React from "react";
import { useTheme } from "react-jss";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Container from "../../Components/Containers/Container";
import ExternalLink from "../../UI/Links/ExternalLink/ExternalLink";
import Column from "../../Components/Containers/Columns/Column";
import GroupedCard from "../../Components/Cards/Layouts/GroupedCards";

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
          color: [theme.text, theme.text],
          value: ["Frame.io 3.7", "Frame.io 3.6"],
        }}
        tag={{
          color: [theme.main, theme.text],
          value: ["Product designer", "Product designer"],
        }}
        background={{
          color: [theme.grey, theme.grey],
          hover: [theme.hover, theme.hover],
        }}
        status={["link", "link"]}
        src={["", ""]}
        alt={["", ""]}
      />
    </>
  );
};
export default Introduction;
