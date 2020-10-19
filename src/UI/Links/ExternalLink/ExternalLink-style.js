import { createUseStyles } from "react-jss";

const ExternalLinkStyle = createUseStyles({
  external: {
    display: "flex",
    height: "auto",
    flexDirection: "column",
    margin: "0",

    paddingBottom: "8px",
    width: "100%",
    "@media (min-width: 768px)": { width: "max-content", marginRight: "32px" },
    "@media (min-width: 1360px)": { marginRight: "40px" },
    "&:last-of-type": {
      marginRight: "0px",
    },
    "& :hover": {
      cursor: "pointer",
    },
  },
  inside: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  link: {
    fontFamily: "GT Sectra",
    fontWeight: "normal",
    fontSize: "19px",
    lineHeight: "24px",
    letterSpacing: "0em",
    padding: "5px 0 12px",
    transition: "color .15s ease, margin .15s ease",

    "@media (min-width: 768px)": {
      padding: "8px 0 9px",
      fontSize: "21px",
      lineHeight: "32px",
    },
    "@media (min-width: 1360px)": {
      padding: "8px 0 9px",
      fontSize: "23px",
      lineHeight: "32px",
    },
  },
  iconLeftOFF: {
    paddingTop: "6px",
    paddingBottom: "4px",
    opacity: "0",
    transition: "opacity .15s ease, margin .15s ease",

    "@media (min-width: 768px)": {
      paddingBottom: "2px",
      paddingTop: "5px",
    },
  },
  iconLeftON: {
    paddingBottom: "4px",
    marginRight: "12px",
    opacity: "1",
    paddingTop: "6px",
    transition: "opacity .15s ease, margin .15s ease",
    "@media (min-width: 768px)": {
      paddingBottom: "2px",
      paddingTop: "5px",
    },
  },
  iconRightOFF: {
    paddingBottom: "4px",
    display: "block",
    opacity: "1",
    marginLeft: "12px",
    paddingTop: "6px",
    transition: "opacity .15s ease, margin .15s ease",
    "@media (min-width: 768px)": {
      paddingBottom: "2px",
      paddingTop: "5px",
    },
  },
  iconRightON: {
    paddingBottom: "4px",
    opacity: "0",
    paddingTop: "6px",
    transition: "opacity .15s ease, margin .15s ease",
    "@media (min-width: 768px)": {
      paddingBottom: "2px",
      paddingTop: "5px",
    },
  },
});

export default ExternalLinkStyle;
