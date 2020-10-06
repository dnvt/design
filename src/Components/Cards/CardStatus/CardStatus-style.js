import { createUseStyles } from "react-jss";

const CardStatusStyle = createUseStyles({
  Status: {
    position: "absolute",
    maxWidth: "100%",
    top: "0",
    left: "0",
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
});

export default CardStatusStyle;
