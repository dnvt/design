import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../Utils/Image/Image";
import CardImageStyle from "./CardImage-style";

const CardImage = (props) => {
  const classes = CardImageStyle();

  const cardImage = (
    <div className={classes.CardImage} style={{ background: props.background }}>
      {props.src && <Image src={props.src} alt={props.alt} />}
    </div>
  );

  if (props.status !== "stop") return <Link to={props.path}>{cardImage}</Link>;
  return cardImage;
};

export default CardImage;
