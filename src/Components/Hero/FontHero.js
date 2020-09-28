import React from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";

import Font from "../../Utils/Font/Font";
import Container from "../Containers/Container";
import Hero from "./Hero";
import HeroStyle from "./Hero-style";

const FontHero = (props) => {
  const classes = HeroStyle();
  const window = useWindowSize();

  if (window.width > 768) {
    return <Hero value={props.value} />;
  }

  return (
    <Container full>
      <div
        className={classes.Fontimation}
        style={{ height: "400px", margin: "-80px 0" }}
      >
        <Font type='hero'>{props.value}</Font>
      </div>
    </Container>
  );
};

export default FontHero;
