import React from "react";
import CardStyle from "./Card-style";

import CardStatus from "./CardStatus/CardStatus";

const Card = (props) => {
  const classes = CardStyle();
  // TODO: Findout about the hover hook Im using
  // const [ref, hovered] = useHover();

  return (
    <div className={classes.projectCover} ref={ref} style={{ height: height }}>
      <CardStatus
        nda={nda}
        loading={loading}
        wip={wip}
        fill={titleColor}
        titleColor={titleColor}
      />
      <CardImage
        alt={alt}
        src={src}
        fill={theme}
        background={hovered ? backgroundHover : background}
        scale={hovered ? "1.04" : "1"}
        path={path}
      />
      <CardTitle
        reverse={reverse}
        right={right}
        projectTags={tags}
        projectTitle={title}
        hover={hovered}
        tagsColor={tagsColor}
        titleColor={titleColor}
      />
    </div>
  );
};

export default Card;
