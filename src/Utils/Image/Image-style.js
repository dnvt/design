import { createUseStyles } from "react-jss";

const ImageStyle = createUseStyles({
  loading: {
    width: "100%",
    height: "100%",
    background: ({ theme }) => theme.outline,
    padding: "16px",
  },
  mobile: {
    width: "100%",
    height: "100%",
    background: ({ theme }) => theme.outline,
    padding: "32px 16px",
    borderRadius: "22px",
    "@media (min-width: 768px)": {
      borderRadius: "28px",
    },
    "@media (min-width: 1360px)": {
      borderRadius: "42px",
    },
  },
  vignette: {
    width: "100%",
    height: "100%",
    padding: "16px",
    background: ({ theme }) => theme.outline,
  },
});

export default ImageStyle;
