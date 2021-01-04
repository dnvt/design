import React, { memo } from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { useTheme } from "react-jss";

import VignettesStyle from "./Vignettes-style";
import Image from "../../Utils/Image/Image";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Container from "../Containers/Container";

const Vignettes = (props) => {
  // props.big = ?boolean;
  // props.src = string;
  // props.alt = string;

  const theme = useTheme();
  const window = useWindowSize();
  const classes = VignettesStyle({ ...props, theme });

  /// Always going to have this
  const imgSegment = (
    <div
      className={props.width ? classes.VignetteWidth : classes.Vignette}
      style={{ background: props.background }}
    >
      <Image
        fullWidth={props.width}
        class={props.big ? "image" : classes.image}
        big={props.big ? true : false}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );

  /// If there is an alt for !== hero
  const legendSegment = (
    <>
      <Spacer height={window.width > 992 ? 16 : 8} />
      <Font type='legend'>{props.alt}</Font>
    </>
  );

  /// Layout of Vignette component

  if (props.hero) {
    return (
      <div className={classes.heroVignette}>
        <Image class={classes.image} src={props.src} alt={props.alt} />
      </div>
    );
  }

  if (props.big) {
    return (
      <>
        {imgSegment}
        {props.alt && <Container>{legendSegment}</Container>}
      </>
    );
  }

  return (
    <Container>
      {imgSegment}
      {props.alt && <> {legendSegment}</>}
    </Container>
  );
};

export default memo(Vignettes);
