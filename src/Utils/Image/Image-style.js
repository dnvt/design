import { createUseStyles } from "react-jss";

const ImageStyle = createUseStyles({
  loading: {
    width: "100%",
    height: "100%",
    background: ({ theme }) => theme.outline,
    padding: "16px",
    "@media (min-width: 1360px)": {
      padding: "24px",
    },
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
      padding: "40px 24px",
      borderRadius: "42px",
    },
  },
  vignette: {
    width: "100%",
    height: "100%",
    padding: "16px",
    // background: ({ theme }) => theme.outline,
    "@media (min-width: 1360px)": {
      padding: "24px",
    },
  },

  bigVignette: {
    width: "100%",
    height: "100%",
    padding: "16px",
    // background: ({ theme }) => theme.outline,
    "@media (min-width: 992px)": {
      width: "928px",
    },

    "@media (min-width: 1360px)": {
      padding: "24px",
      width: "1120px",
    },
  },
});

export default ImageStyle;
