import { createUseStyles } from "react-jss";

const VignettesStyle = createUseStyles({
  Vignette: {
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height: "336px",

    "@media (min-width: 768px)": {
      height: "576px",
    },
    "@media (min-width: 1360px)": {
      height: "704px",
    },
  },
});

export default VignettesStyle;
