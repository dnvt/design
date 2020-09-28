import { createUseStyles } from "react-jss";

const SidelinesStyle = createUseStyles({
  sidelines: {
    display: "none",
    position: "fixed",
    maxWidth: "100%",
    height: "150%",
    zIndex: "-1",
    top: "0",
    borderLeft: ({ theme }) => theme.sidelines,
    borderRight: ({ theme }) => theme.sidelines,
    transition: "all 0.15s ease",

    "@media (min-width: 1080px)": {
      display: "block",
      width: "1024px",
      padding: "0",
      left: "50%",
      marginLeft: "-512px",
    },
    "@media (min-width: 1280px)": {
      display: "block",
      width: "1088px",
      padding: "0",
      left: "50%",
      marginLeft: "-544px",
    },
    "@media (min-width: 1360px)": {
      display: "block",
      width: "1280px",
      padding: "0",
      left: "50%",
      marginLeft: "-640px",
    },

    "@media (min-width: 1480px)": {
      display: "block",
      width: "1440px",
      padding: "0",
      left: "50%",
      marginLeft: "-720px",
    },
  },
});

export default SidelinesStyle;
