import { createUseStyles } from "react-jss";

const WindowSizeDisplayStyle = createUseStyles({
  Display: {
    position: "fixed",
    bottom: "16px",
    left: "16px",
    height: "auto",
    width: 172,
    padding: "0 24px",
    background: ({ theme }) => theme.text,
    opacity: 0.94,
    zIndex: "10001",
  },
});

export default WindowSizeDisplayStyle;
