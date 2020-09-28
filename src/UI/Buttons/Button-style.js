import { createUseStyles } from "react-jss";

const ButtonStyle = createUseStyles({
  menuIcon: {
    zIndex: "1",
    display: "flex",
    marginRight: "32px",
    "&:last-of-type": {
      marginRight: "0px",
    },
    "@media (min-width: 1360px)": {
      marginRight: "40px",
    },
    "& :hover": {
      cursor: "pointer",
    },
  },
  icon: {
    zIndex: "1",
    paddingTop: "6px",
    "@media (min-width: 1360px)": {
      paddingTop: "5px",
    },
  },
});

export default ButtonStyle;
