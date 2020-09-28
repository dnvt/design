import React from "react";
import { useTheme } from "react-jss";

import MenuLink from "../../UI/Links/MenuLink/MenuLink";
import ImageStyle from "./Image-style";

const Image = (props) => {
  const theme = useTheme();
  const classes = ImageStyle({ ...props, theme });

  // Transforming the image Array fomr Device
  let imageWebp = null;
  let imagePng = null;

  if (props.src) {
    imageWebp = props.src[1];
    imagePng = props.src[0];
    console.log(props.src);
  }

  let dots = "...";
  let imageState;

  const picture = (
    <picture style={props.background && { background: props.background }}>
      <source srcSet={imageWebp} type='image/webp' />
      <img src={imagePng} alt={props.alt} />
    </picture>
  );

  const loading = (
    <div className={props.cl ? classes[props.cl] : classes.loading}>
      <MenuLink icon='loading' color={theme.text} value={"Loading" + dots} />
    </div>
  );
  props.src ? (imageState = picture) : (imageState = loading);

  return imageState;
};

export default Image;
