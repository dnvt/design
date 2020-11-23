import React, { memo } from "react";
import { useGridVisibility } from "../../Hooks/useGridVisibility";
import { useTheme } from "react-jss";

import Container from "../../Components/Containers/Container";
import SpacerStyle from "./Spacer-style";

const Spacer = (props) => {
  const theme = useTheme();
  const [visibility] = useGridVisibility();
  const classes = SpacerStyle({ ...props, theme });

  let valueNumber = <>{props.font ? null : props.height}</>;
  let value = <div className={classes.bigNumber}>{valueNumber}</div>;

  switch (true) {
    case props.height > 32:
      value = (
        <div className={classes.bigNumber}>
          {props.font ? null : props.height}
        </div>
      );
      break;
    case props.height > 24:
      value = <div className={classes.midNumber}>{valueNumber}</div>;
      break;
    case props.height > 16:
      value = <div className={classes.number}>{valueNumber}</div>;
      break;
    case props.height > 8:
      value = <div className={classes.smallNumber}>{valueNumber}</div>;
      break;

    default:
      value = null;
      break;
  }

  let spacer = (
    <div
      style={{
        width: props.width,
        height: props.height,
        background: "transparent",
      }}
      className={classes.hidding}
    ></div>
  );

  if (visibility || props.show) {
    spacer = (
      <div
        style={{
          width: props.width,
          height: props.height,
          background: props.bg,
        }}
        className={props.font ? classes.fontSpacer : classes.spacer}
      >
        {value}
      </div>
    );
  }

  if (props.c) return <Container>{spacer}</Container>;
  return <>{spacer}</>;
};

export default memo(Spacer);
