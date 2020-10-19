import { createUseStyles } from "react-jss";

const ColumnStyle = createUseStyles({
  Column: {
    display: "grid",
    gridTemplateColumns: "1fr",
    columnGap: "24px",

    "@media (min-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "auto auto",
      columnGap: "32px",
    },

    "@media (min-width: 992px)": {
      columnGap: "32px",
    },
  },
});

export default ColumnStyle;
