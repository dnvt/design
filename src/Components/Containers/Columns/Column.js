import React, { memo } from "react";
import { useWindowSize } from "../../../Hooks/useWindowSize";
import Verticaler from "../../../Utils/Spacer/Variations/Verticaler";
import ColumnStyle from "./Column-style";

const Column = (props) => {
  const classes = ColumnStyle();
  const window = useWindowSize();

  let spacerWidth = [];

  switch (true) {
    case window.width > 1360:
      spacerWidth = ["352px", "544px"];
      break;
    case window.width > 992:
      spacerWidth = ["288px", "448px"];
      break;
    default:
      spacerWidth = ["100%", "100%"];
      break;
  }

  return (
    <div className={classes.Column}>
      <div>{props.children}</div>
      {props.spacer && window.width > 992 ? (
        <Verticaler width={props.half ? spacerWidth[1] : spacerWidth[0]} />
      ) : null}
    </div>
  );
};

export default memo(Column);
