import { createUseStyles } from "react-jss";

const NumberedListStyle = createUseStyles({
  listNumber: {
    position: "relative",
    "@media (min-width: 992px)": {
      position: "absolute",
      width: "24px",
      left: "-38px",
    },
  },
});

export default NumberedListStyle;
