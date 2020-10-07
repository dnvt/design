import { createUseStyles } from "react-jss";

const CardTitleStyle = createUseStyles({
  projectTitle: {
    position: "absolute",
    maxWidth: "100%",
    bottom: "0",
    left: "0",
    padding: "16px",
    "@media (min-width: 576px)": {
      padding: "16px 24px",
    },

    "@media (min-width: 768px)": {
      padding: "32px 40px",
    },

    "@media (min-width: 992px)": {
      padding: "40px 48px",
    },

    "@media (min-width: 1360px)": {
      padding: "40px 56px",
    },
  },

  projectTitleRight: {
    position: "absolute",
    maxWidth: "100%",
    bottom: "0",
    right: "0",
    padding: "16px",
    "@media (min-width: 576px)": {
      padding: "16px 24px",
      maxWidth: "50%",
    },

    "@media (min-width: 768px)": {
      padding: "40px",
      maxWidth: "28%",
    },

    "@media (min-width: 992px)": {
      padding: "40px 48px",
    },

    "@media (min-width: 1360px)": {
      padding: "40px 56px",
    },
  },
});

export default CardTitleStyle;
