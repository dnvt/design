import React from "react";
import { animated } from "react-spring";
import Font from "../../Utils/Font/Font";

export function fontimation(
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
) {
  const fonti = (
    <Font passRef={fontRef} type='hero'>
      {value}
    </Font>
  );

  const FontimationLeft = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props.xy.interpolate(transLeft) }}>
        <Font passRef={fontRef} type='hero'>
          {value}
        </Font>
      </animated.div>
    </div>
  );

  const FontimationRight = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props.xy.interpolate(transRight) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationRight2 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props2.xy.interpolate(transRight2) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationLeft2 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props2.xy.interpolate(transLeft2) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationLeft3 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props3.xy.interpolate(transLeft3) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationRight3 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props3.xy.interpolate(transRight3) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationLeft4 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props4.xy.interpolate(transLeft4) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationRight4 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props4.xy.interpolate(transRight4) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationLeft5 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props5.xy.interpolate(transLeft5) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationRight5 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props5.xy.interpolate(transRight5) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationLeft6 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props6.xy.interpolate(transLeft6) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationRight6 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props6.xy.interpolate(transRight6) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationLeft7 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props7.xy.interpolate(transLeft7) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationRight7 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props7.xy.interpolate(transRight7) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationLeft8 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props8.xy.interpolate(transLeft8) }}>
        {fonti}
      </animated.div>
    </div>
  );

  const FontimationRight8 = (
    <div className={classes.heroAnimated} style={{ height: window.height }}>
      <animated.div style={{ transform: props8.xy.interpolate(transRight8) }}>
        {fonti}
      </animated.div>
    </div>
  );

  return {
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
  };
}
