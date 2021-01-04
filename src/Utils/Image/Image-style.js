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

    "@media (min-width: 576px)": {
      padding: "16px 24px",
    },

    "@media (min-width: 768px)": {
      padding: "40px",
    },

    "@media (min-width: 992px)": {
      padding: "40px 48px",
    },

    "@media (min-width: 1360px)": {
      padding: "40px 56px",
    },
  },

  bigVignette: {
    width: "100%",
    height: "100%",
    padding: "16px",

    "@media (min-width: 576px)": {
      padding: "16px 24px",
    },

    "@media (min-width: 768px)": {
      padding: "40px",
    },

    "@media (min-width: 992px)": {
      padding: "40px 48px",
      width: "928px",
    },

    "@media (min-width: 1360px)": {
      padding: "40px 56px",
      width: "1120px",
    },
  },
  heroVignette: {
    display: "flex",
    textAlign: "center",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "calc(536px + 40px)",

    "@media (min-width: 768px)": {
      height: "calc(704px + 40px)",
    },
    "@media (min-width: 1360px)": {
      height: "calc(840px + 40px)",
    },
  },
  img: {
    // height: "100%",
    opacity: ({ dark }) => (dark.value ? 0.9 : 1),
    userDrag: "none",
  },
});

export default ImageStyle;
