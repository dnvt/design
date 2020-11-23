import { createUseStyles } from "react-jss";

const MenuLinkStyle = createUseStyles({
  "@keyframes slidein": {
    from: { opacity: 0, top: "28px", transition: "all .15s ease" },

    "77%": { opacity: 0, top: "28px", transition: "all .15s ease" },
    to: { opacity: 1, top: "32px", transition: "all .15s ease" },
  },
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
  },
  tooltipHovered: {
    display: "block",
    top: "32px",
    position: "absolute",
    opacity: "1",
    animationName: "$slidein",
    animationDuration: "1.2s",
  },
});

export default MenuLinkStyle;
