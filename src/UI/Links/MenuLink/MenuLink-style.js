import { createUseStyles } from "react-jss";

const MenuLinkStyle = createUseStyles({
  MenuLink: {
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
});

export default MenuLinkStyle;
