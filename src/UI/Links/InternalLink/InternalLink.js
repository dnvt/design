import React from "react";
import InternalLinkStyle from "./InternalLink-style";
import { useTheme } from "react-jss";
import Separator from "../../../Utils/Separator/Separator";
import { Link } from "react-router-dom";
import useHover from "../../../Hooks/useHover";
import Font from "../../../Utils/Font/Font";

const InternalLink = (props) => {
  const classes = InternalLinkStyle();
  const theme = useTheme();
  const [hoveredRef, isHovered] = useHover();

  return (
    <>
      <div ref={hoveredRef} className={classes.internal}>
        <div className={classes.inside}>
          <Link className={classes.link} to={props.path}>
            <Font type='link' color={isHovered ? theme.main : theme.text}>
              {props.value}
            </Font>
          </Link>
        </div>
        <Separator color={isHovered ? theme.main : theme.text} opacity='1' />
      </div>
    </>
  );
};

export default InternalLink;
