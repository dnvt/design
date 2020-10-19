import React from "react";
import { useWindowSize } from "../../../Hooks/useWindowSize";
import useHover from "../../../Hooks/useHover";

import ExternalLinkStyle from "./ExternalLink-style";
import Icon from "../../../Utils/Icon/Icon";
import Separator from "../../../Utils/Separator/Separator";

const ExternalLink = (props) => {
  const classes = ExternalLinkStyle();
  const window = useWindowSize();
  const [hoveredRef, isHovered] = useHover();

  const mobile = (
    <div ref={hoveredRef} className={classes.external}>
      <div className={classes.inside}>
        <a
          className={classes.link}
          href={props.path}
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: props.color }}
        >
          {props.value}
        </a>

        <div className={classes.iconRightOFF}>
          <Icon name='link' color={props.color} />
        </div>
      </div>
      <Separator ext color={props.color} opacity='1' />
    </div>
  );

  const desktop = (
    <div ref={hoveredRef} className={classes.external}>
      <div className={classes.inside}>
        <div className={isHovered ? classes.iconLeftON : classes.iconLeftOFF}>
          <Icon name='link' color={props.color} />
        </div>
        <a
          className={classes.link}
          style={
            isHovered
              ? {
                  marginLeft: "0",
                  marginRight: "-24px",
                  color: props.color,
                }
              : {
                  marginLeft: "-24px",
                  marginRight: "0",
                  color: props.color,
                }
          }
          href={props.path}
          target='_blank'
          rel='noopener noreferrer'
        >
          {props.value}
        </a>
        <div className={isHovered ? classes.iconRightON : classes.iconRightOFF}>
          <Icon name='link' color={props.color} />
        </div>
      </div>
      <Separator ext color={props.color} opacity='1' />
    </div>
  );

  if (window.width < "768") return <>{mobile}</>;
  return <>{desktop}</>;
};

export default ExternalLink;
