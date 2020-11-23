import { createUseStyles } from "react-jss";

const CardImageStyle = createUseStyles({
  CardImage: {
    display: "flex",
    justifyContent: "center",
    transition: "background .15s ease",
    width: "auto",
    position: "relative",
    height: "100%",
    objectFit: "cover",
    "@media (min-width: 576px)": {
      minWidth: "100%",
    },
  },
  image: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    width: "auto",
    height: "100%",
    objectFit: "cover",
    transition: "transform .15s ease",

    "@media (min-width: 576px)": {
      minWidth: "100%",
    },
  },
});

export default CardImageStyle;
