import React from "react";
import { useTheme } from "react-jss";
import Container from "../../Components/Containers/Container";

import MenuLink from "../../UI/Links/MenuLink/MenuLink";
import ImageStyle from "./Image-style";

const Image = (props) => {
  const theme = useTheme();
  const classes = ImageStyle({ ...props, theme });

  // Transforming the image Array from Device
  let imageWebp = null;
  let imagePng = null;

  if (props.src) {
    imageWebp = props.src[1];
    imagePng = props.src[0];
    // console.log(props.src);
  }

  let dots = "...";
  let imageState;

  const picture = (
    <picture
      className={props.class}
      style={
        (props.background && { background: props.background }) ||
        (props.scale && { transform: "scale(" + props.scale + ")" })
      }
    >
      <source srcSet={imageWebp} type='image/webp' />
      <img style={{ height: "100%" }} src={imagePng} alt={props.alt} />
    </picture>
  );

  const loading = props.big ? (
    <Container>
      <div className={props.cl ? classes[props.cl] : classes.loading}>
        <MenuLink icon='loading' color={theme.text} value={"Loading" + dots} />
      </div>
    </Container>
  ) : (
    <div className={props.cl ? classes[props.cl] : classes.loading}>
      <MenuLink icon='loading' color={theme.text} value={"Loading" + dots} />
    </div>
  );

  props.src ? (imageState = picture) : (imageState = loading);

  return imageState;
};

export default Image;
