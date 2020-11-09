import { createUseStyles } from "react-jss";

const SeparatorStyle = createUseStyles({
  Separator: (props) => ({
    width: "100%",
    height: "1px",
    background: props.color,
    opacity: props.opacity,
    transition: "background .15s ease,opacity .15s ease",
    marginTop: "-9px",
    "&:hover": {
      background: props.hover,
    },
  }),

  SeparEx: (props) => ({
    width: "100%",
    height: "1px",
    background: props.color,
    opacity: props.opacity,
    transition: "background .15s ease,opacity .15s ease",
    marginTop: "-10px",
    "&:hover": {
      background: props.hover,
    },
  }),
});

export default SeparatorStyle;
