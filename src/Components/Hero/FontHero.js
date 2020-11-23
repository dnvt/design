// import React from "react";

// import Font from "../../Utils/Font/Font";
// import Container from "../Containers/Container";

// import HeroStyle from "./Hero-style";

// const FontHero = (props) => {
//   const classes = HeroStyle();

//   let fonti = [];
//   for (let i = 0; i < 16; i++) {
//     fonti.push(
//       <div className={classes.heroAnimated} style={{ height: window.height }}>
//           <div className={classes.Fontimation}>
//         <Font type='hero'>{props.value}</Font>
//       </div>
//       </div>
//     );
//   }

//   return (
//     <Container full>
//         <div className={classes.Hero}>{fonti}</div>
//     </Container>
//   );
// };

// export default FontHero;

import React, { memo } from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";

import Font from "../../Utils/Font/Font";
import Container from "../Containers/Container";
import Hero from "./Hero";
import HeroStyle from "./Hero-style";

const FontHero = (props) => {
  const classes = HeroStyle();
  const window = useWindowSize();

  if (window.width > 768) {
    return <Hero value={props.value} bottom={props.bottom} />;
  }

  return (
    <Container full>
      <div
        className={classes.Fontimation}
        style={{ height: "920px", margin: "-80px 0" }}
      >
        <Font type='hero'>{props.value}</Font>
      </div>
    </Container>
  );
};

export default memo(FontHero);
