import { createUseStyles } from "react-jss";

const TooltipStyle = createUseStyles({
  Tooltip: {
    padding: "0 16px",
    margin: "4px 0",
    background: ({ theme }) => theme.text,
  },
});

export default TooltipStyle;
