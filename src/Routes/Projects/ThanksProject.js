import React from "react";
import Container from "../../Components/Containers/Container";
import SpacerFortyHalf from "../../Utils/Spacer/Variations/SpacerFortyHalf";
import Column from "../../Components/Containers/Columns/Column";
import ParagraphModule from "./ParagraphModule";

export const ThanksProject = (props) => {
  const rows = props.content.map(ParagraphModule);
  return (
    <Container>
      <SpacerFortyHalf />
      <Column spacer third>
        {rows}
      </Column>
    </Container>
  );
};
