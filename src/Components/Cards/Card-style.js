import { createUseStyles } from "react-jss";

const CardStyle = createUseStyles({
  projectCover: {
    position: "relative",
    width: "100%",
    minWidth: "288px",
    height: "448px",
    overflowWrap: "break-word",
    overflow: "hidden",
    cursor: "pointer",
    "@media (min-width: 768px)": {
      height: "576px",
      minWidth: "288px",
    },
    "@media (min-width: 1360px)": {
      height: "704px",
    },
  },
});

export default CardStyle;
