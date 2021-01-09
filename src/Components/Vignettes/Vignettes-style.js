import { createUseStyles } from "react-jss";

const VignettesStyle = createUseStyles({
  Vignette: {
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height: "256px",
    background: ({ theme }) => theme.outline,

    "@media (min-width: 768px)": {
      height: "576px",
    },
    "@media (min-width: 1360px)": {
      height: "704px",
    },
  },
  VignetteWidth: {
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height: "336px",
    background: ({ theme }) => theme.outline,

    "@media (min-width: 768px)": {
      height: "296px",
    },
    "@media (min-width: 1360px)": {
      height: "464px",
    },
  },

  heroVignette: {
    display: "flex",
    justifyContent: "center",
    transition: "height .6s ease",
    width: "auto",
    position: "relative",
    objectFit: "cover",
    overflow: "hidden",
    padding: "24px 0",
    height: "664px",
    // Final values in the Component
    background: (props) => props.background,

    "@media (min-width: 768px)": {
      height: "960px",
      // Final values in the Component
    },
    "@media (min-width: 1360px)": {
      height: "1200px",
      // Final values in the Component
    },
  },

  image: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    width: "auto",
    height: "100%",
    objectFit: "cover",
    transition: "transform .15s ease",

    "@media (min-width: 576px)": {
      minWidth: "100%",
    },
  },
});

export default VignettesStyle;
