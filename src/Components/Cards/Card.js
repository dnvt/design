import React, { memo } from "react";
import CardStyle from "./Card-style";

import CardStatus from "./CardStatus/CardStatus";
import CardImage from "./CardImage/CardImage";
import CardTitle from "./CardTitle/CardTitle";
import useHover from "../../Hooks/useHover";
import Container from "../Containers/Container";
import { useTheme } from "react-jss";
import { privacy } from "./Switch/privacy";

const Card = (props) => {
  const theme = useTheme();
  const classes = CardStyle();
  const [hoveredRef, isHovered] = useHover();

  /// Defining if a card as a linked project yet or not
  let cardPrivacyClass = privacy(classes, props);

  let card = (
    <div
      className={cardPrivacyClass}
      ref={hoveredRef}
      style={
        props.background === theme.background
          ? {
              border: `1px solid ${theme.outline}`,
              height: props.height,
              width: props.width,
            }
          : { height: props.height, width: props.width }
      }
    >
      <CardStatus status={props.status} color={props.titleColor} />
      <CardImage
        status={props.status}
        alt={props.alt}
        src={props.src}
        background={isHovered ? props.backgroundHover : props.background}
        scale={isHovered ? "1.04" : "1"}
        path={props.path}
        href={props.href}
        paddingB={props.paddingB}
      />
      <CardTitle
        reverse={props.reverse}
        right={props.right}
        tagValue={props.tagValue}
        hover={isHovered}
        tagColor={props.tagsColor}
        titleColor={props.titleColor}
        background={props.background}
      >
        {props.children}
      </CardTitle>
    </div>
  );

  // Putting the Card component around a Container
  // on the props call
  if (props.container) return <Container>{card}</Container>;
  return card;
};

export default memo(Card);
