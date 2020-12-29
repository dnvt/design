import { createUseStyles } from "react-jss";

const HeaderStyle = createUseStyles({
  Header: {
    width: "100%",
    height: "auto",
  },
  menuMobile: {
    zIndex: "100",
    display: "flex",

    "& div": {
      display: "flex",
    },
  },
  menu: {
    zIndex: "1000",
    display: "flex",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "0",
    marginBottom: "0",
    marginRight: "40px",
    padding: "8px 0px",
    "@media (min-width: 768px)": {
      justifyContent: "flex-start",
      width: "calc(100% - 12px)",
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
    },
    "&:last-of-type": {
      marginRight: "0",
    },
  },
});

export default HeaderStyle;
