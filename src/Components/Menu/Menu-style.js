import { createUseStyles } from "react-jss";

const MenuStyle = createUseStyles({
  Menu: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    height: "100%",
    width: "100%",
    background: "white",
    zIndex: "999",
  },
  hash: {
    position: "relative",
    bottom: "-20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "140px",
    margin: "auto",
    marginTop: "120px",
    marginBottom: "0",

    padding: "8px 0px",
    "@media (min-width: 768px)": {
      justifyContent: "flex-start",
      padding: "16px 0px",
    },
    "@media (min-width: 992px)": {
      padding: "24px 0px",
    },
    "@media (min-width: 1360px)": {
      padding: "32px 0px",
    },
    "&:first-of-type": {
      display: "flex",
    }
  },
});

export default MenuStyle;
