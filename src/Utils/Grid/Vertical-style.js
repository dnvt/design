import { createUseStyles } from "react-jss";

const VerticalStyle = createUseStyles({
  Vertical: {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: "-1",
  },

  Column: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    columnGap: "16px",

    "& div": {
      height: "100%",
      background: ({ theme }) => theme.gridBackground,
    },

    "@media (min-width: 576px)": {
      gridTemplateColumns: "1fr",
    },

    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
      columnGap: "24px",
    },

    "@media (min-width: 992px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
      columnGap: "32px",
    },

    "@media (min-width: 1360px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ",
      columnGap: "32px",
    },
  },
});

export default VerticalStyle;

// "@media (min-width: 576px)":

// "@media (min-width: 768px)": {

// "@media (min-width: 992px)": {

// "@media (min-width: 1360px)": {
