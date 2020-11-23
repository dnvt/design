import { createUseStyles } from "react-jss";

const VignettesStyle = createUseStyles({
  Vignette: {
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height: "336px",
    background: ({ theme }) => theme.outline,

    "@media (min-width: 768px)": {
      height: "576px",
    },
    "@media (min-width: 1360px)": {
      height: "704px",
    },
  },
  heroVignette: {
    display: "flex",
    justifyContent: "center",
    transition: "background .15s ease",
    width: "auto",
    position: "relative",
    objectFit: "cover",
    overflow: "hidden",


    height: "576px",
    background: ({ theme }) => theme.outline,

    "@media (min-width: 768px)": {
      height: "744px",
    },
    "@media (min-width: 1360px)": {
      height: "880px",
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
