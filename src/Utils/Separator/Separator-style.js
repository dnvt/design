import { createUseStyles } from "react-jss";

const SeparatorStyle = createUseStyles({
  Separator: (props) => ({
    width: "100%",
    height: "1px",
    background: props.color,
    opacity: props.opacity,
    transition: "background .1s ease,opacity .1s ease",
    marginTop: "-9px",
    "&:hover": {
      background: props.hover,
    },
  }),
});

export default SeparatorStyle;
