import React from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";

import VignettesStyle from "./Vignettes-style";
import Image from "../../Utils/Image/Image";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Container from "../Containers/Container";
import { useTheme } from "react-jss";

// TODO: Continue cleaning this shit

const Vignettes = (props) => {
  // props.big = ?boolean;
  // props.src = string;
  // props.alt = string;

  const theme = useTheme();
  const window = useWindowSize();
  const classes = VignettesStyle({ ...props, theme });

  const imgSegment = (
    <div className={classes.Vignette}>
      <Image
        cl={props.big ? "bigVignette" : "vignette"}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );

  const legendSegment = (
    <>
      <Spacer height={window.width > 992 ? 16 : 8} />
      <Font type='legend'>{props.alt}</Font>
    </>
  );

  return props.big ? (
    <>
      {imgSegment}
      {props.alt && <Container>{legendSegment}</Container>}
    </>
  ) : (
    <Container>
      {imgSegment}
      {props.alt && <> {legendSegment}</>}
    </Container>
  );
};

export default Vignettes;