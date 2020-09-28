import { createUseStyles } from "react-jss";

const FramelessGridStyle = createUseStyles({
  FramelessScrollGroup: {
    display: "grid",
    gridTemplateColumns: "64px 1fr 1fr 1fr 1fr 1fr 64px",
    columnGap: "24px",

    "@media (min-width: 768px)": { columnGap: "32px" },
  },
});

export default FramelessGridStyle;
