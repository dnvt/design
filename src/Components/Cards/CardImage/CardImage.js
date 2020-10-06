import React from "react";
import { Link } from "react-router-dom";
import CardImageStyle from "./CardImage-style";

const CardImage = (props) => {
  // props = { path,background, scale, alt, [srcWebp, srcPng] }
  const classes = CardImageStyle();

  return (
    <>
      <Link to={props.path}>
        <div
          className={classes.CardImage}
          style={{ background: props.background }}
        >
          {src && (
            <picture
              className={classes.image}
              style={{ transform: "scale(" + props.scale + ")" }}
            >
              <source srcSet={props.src[0]} type='image/webp' />
              <img src={props.src[1]} alt={props.alt} />
            </picture>
          )}
        </div>
      </Link>
    </>
  );
};

export default CardImage;
