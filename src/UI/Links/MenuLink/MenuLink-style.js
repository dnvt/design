import { createUseStyles } from "react-jss";

const MenuLinkStyle = createUseStyles({
  MenuLink: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    "&: hover": (props) => ({ color: props.hover }),
  },
  icon: {
    height: "100%",
    padding: "6px 0 2px",
    display: "flex",
    alignItems: "center",
  },
  iconRight: {
    height: "100%",
    padding: "6px 0 2px",
    marginLeft: "8px",
    display: "flex",
    alignItems: "center",
  },
  tooltip: {
    display: "none",
    top: "28px",
    position: "absolute",
    opacity: "0",
    // transition: "all .15s ease",
  },
  tooltipHovered: {
    display: "block",
    top: "32px",
    position: "absolute",
    opacity: "1",
    transition: "all .15s ease",
  },
});

export default MenuLinkStyle;
