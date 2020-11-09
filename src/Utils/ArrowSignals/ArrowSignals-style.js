import { createUseStyles } from "react-jss";

const ArrowSignalsStyle = createUseStyles({
  aLeft: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    transform: "scaleX(-1)",
    left: "16px",
    "@media (min-width: 576px)": {
      left: "24px",
    },
    "@media (min-width: 768px)": {
      left: "32px",
    },
  },
  aRight: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    right: "16px",
    "@media (min-width: 576px)": {
      right: "24px",
    },
    "@media (min-width: 768px)": {
      right: "32px",
    },
  },
});

export default ArrowSignalsStyle;
