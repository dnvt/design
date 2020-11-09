import { createUseStyles } from "react-jss";

const HeroStyle = createUseStyles({
  Hero: {
    display: "grid",
    gridTemplateColumns:
      "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    width: "100%",
    overflow: "hidden",
    zIndex: "-1",
    "@media (min-width: 768px)": {
      height: "800px",
    },
    "@media (min-width: 1360px)": {
      height: "1240px",
    },
  },
  Fontimation: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    overflow: "hidden",

    "@media (min-width: 576px)": {
      height: "240px",
      margin: "-80px auto 80px",
    },
    "@media (min-width: 768px)": {
      height: "800px",
      margin: "-120px auto",
    },
    "@media (min-width: 1360px)": {
      height: "1240px",
      margin: "-160px auto",
    },
  },
  heroAnimated: {
    width: "100%",
    overflow: "hidden",
    height: "auto",
    zIndex: "-1",
    // "@media (min-width: 768px)": {
  },
});

export default HeroStyle;
