import React from "react";
import { useTheme } from "react-jss";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Container from "../../Components/Containers/Container";
import ExternalLink from "../../UI/Links/ExternalLink/ExternalLink";
import Column from "../../Components/Containers/Columns/Column";

const Introduction = () => {
  const theme = useTheme();

  return (
    <Container style={{ marginTop: "-160px" }}>
      <Font type='h1'>
        Digital designer based in New York – currently redefining modern video
        workflow at Frame.io
      </Font>
      <Spacer height={40} />
      <Column spacer third>
        <Font type='text'>
          Product designer and creative director able to provide strong
          leadership on the development of product designs, marketing campaigns,
          user interfaces, and motion design.
        </Font>
        {/* <Verticaler width='352px' /> */}
      </Column>
      <ExternalLink path='/' color={theme.text} value='Get in touch' />
    </Container>
  );
};
export default Introduction;
