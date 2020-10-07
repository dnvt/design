import { createUseStyles } from "react-jss";

const CardImageStyle = createUseStyles({
  CardImage: {
    display: "flex",
    justifyContent: "center",
    transition: "background .1s ease",
    width: "auto",
    position: "relative",
    height: "100%",
    objectFit: "cover",
    "@media (min-width: 576px)": {
      minWidth: "100%",
    },
  },
  image: {
    transition: "transform .1s ease",
    width: "auto",
    position: "relative",
    height: "100%",
    objectFit: "cover",
    "@media (min-width: 576px)": {
      minWidth: "100%",
    },
  },
});

export default CardImageStyle;
