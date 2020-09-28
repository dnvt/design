import React, { useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { useWindowSize } from "../../Hooks/useWindowSize";

import HeroStyle from "./Hero-style";
import { fontimation } from "./Fontimation";
import { translation } from "./translate3d";

const Hero = ({ value }) => {
  const classes = HeroStyle();

  // Getting the current font Component's sizes
  const fontRef = useRef(null);
  const [sizeRef, setSizeRef] = useState([]);
  useEffect(() => {
    if (fontRef.current) {
      setSizeRef([fontRef.current.offsetHeight, fontRef.current.offsetWidth]);
    }
  }, [fontRef]);

  // Math for the mouseMove
  const window = useWindowSize();
  const calc = (x, y) => [x - window.width * 0.5, y + window.height * 0.5];

  const {
    transRight,
    transLeft,
    transRight2,
    transLeft2,
    transRight3,
    transLeft3,
    transRight4,
    transLeft4,
    transRight5,
    transLeft5,
    transRight6,
    transLeft6,
    transLeft7,
    transRight7,
    transRight8,
    transLeft8,
  } = translation(sizeRef, window);

  const [props8, set8] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 380, friction: 90 },
  }));

  const [props7, set7] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 380, friction: 100 },
  }));

  const [props6, set6] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 380, friction: 110 },
  }));

  const [props5, set5] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 380, friction: 120 },
  }));

  const [props4, set4] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 380, friction: 130 },
  }));

  const [props3, set3] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 380, friction: 140 },
  }));

  const [props2, set2] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 380, friction: 150 },
  }));

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 30, tension: 380, friction: 165 },
  }));

  const {
    FontimationLeft8,
    FontimationLeft7,
    FontimationLeft6,
    FontimationLeft5,
    FontimationLeft4,
    FontimationLeft3,
    FontimationLeft2,
    FontimationLeft,
    FontimationRight,
    FontimationRight2,
    FontimationRight3,
    FontimationRight4,
    FontimationRight5,
    FontimationRight6,
    FontimationRight7,
    FontimationRight8,
  } = fontimation(
    classes,
    props,
    transLeft,
    fontRef,
    value,
    transRight,
    props2,
    transRight2,
    transLeft2,
    props3,
    transLeft3,
    transRight3,
    props4,
    transLeft4,
    transRight4,
    props5,
    transLeft5,
    transRight5,
    props6,
    transLeft6,
    transRight6,
    props7,
    transLeft7,
    transRight7,
    props8,
    transLeft8,
    transRight8,
    window.height
  );

  return (
    <div
      className={classes.Fontimation}
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xy: calc(x, y) }) &&
        set2({ xy: calc(x, y) }) &&
        set3({ xy: calc(x, y) }) &&
        set4({ xy: calc(x, y) }) &&
        set5({ xy: calc(x, y) }) &&
        set6({ xy: calc(x, y) }) &&
        set7({ xy: calc(x, y) }) &&
        set8({ xy: calc(x, y) })
      }
    >
      <div className={classes.Hero}>
        {FontimationLeft8}
        {FontimationLeft7}
        {FontimationLeft6}
        {FontimationLeft5}
        {FontimationLeft4}
        {FontimationLeft3}
        {FontimationLeft2}
        {FontimationLeft}
        {FontimationRight}
        {FontimationRight2}
        {FontimationRight3}
        {FontimationRight4}
        {FontimationRight5}
        {FontimationRight6}
        {FontimationRight7}
        {FontimationRight8}
      </div>
    </div>
  );
};

export default Hero;
