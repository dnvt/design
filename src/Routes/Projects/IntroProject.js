import React from "react";
import { useTheme } from "react-jss";

import Spacer from "../../Utils/Spacer/Spacer";
import Container from "../../Components/Containers/Container";
import Font from "../../Utils/Font/Font";
import Column from "../../Components/Containers/Columns/Column";
import ExternalLink from "../../UI/Links/ExternalLink/ExternalLink";
import ParagraphModule from "./ParagraphModule";

export const IntroProject = (props) => {
  const theme = useTheme();
  const rows = props.content.paragraph.map(ParagraphModule);

  return (
    <Container>
      <Font type='h4'>{props.content.section}</Font>
      <Font type='h1'>{props.content.title}</Font>
      <Spacer height={32} />
      <Font type='h5'>{props.content.typeOfProject}</Font>
      <Column spacer third>
        {rows}
      </Column>
      {props.content.link && (
        <ExternalLink
          path={props.content.link}
          color={theme.text}
          value={props.content.button || "Visit project"}
        />
      )}
    </Container>
  );
};
