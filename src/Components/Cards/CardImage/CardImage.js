import React from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../../Hooks/useWindowSize";
import Image from "../../../Utils/Image/Image";
import CardImageStyle from "./CardImage-style";

const CardImage = (props) => {
  const classes = CardImageStyle();
  const window = useWindowSize();

  const cardImage = (
    <div
      className={classes.CardImage}
      style={
        window.width > "768"
          ? { background: props.background }
          : { background: props.background, paddingBottom: props.paddingB }
      }
    >
      {props.src && (
        <Image
          scale={props.scale}
          class={classes.image}
          src={props.src}
          alt={props.alt}
        />
      )}
    </div>
  );

  // This condition might change when I implement password checkin
  if (props.status !== "stop") return <Link to={props.path}>{cardImage}</Link>;
  return cardImage;
};

export default CardImage;
