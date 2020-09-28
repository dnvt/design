import { createUseStyles } from "react-jss";

const AppStyle = createUseStyles({
  Main: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: ({ theme }) => theme.background,
  },
});

export default AppStyle;
