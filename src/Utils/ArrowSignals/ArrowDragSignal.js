import React from "react";
import { useTheme } from "react-jss";

import { useWindowSize } from "../../Hooks/useWindowSize";
import Icon from "../Icon/Icon";
import Spacer from "../Spacer/Spacer";
import ArrowSignalsStyle from "./ArrowSignals-style";

const ArrowDragScroll = (props) => {
  const window = useWindowSize();
  const theme = useTheme();

  const classes = ArrowSignalsStyle({ ...props, theme });
  const arrowChain = (
    <>
      <Icon name='link' color={theme.text} />
      <Spacer height={8} />
      <Icon name='link' color={theme.text} />
      <Spacer height={8} />
      <Icon name='link' color={theme.text} />
    </>
  );

  if (props.big && window.width < "1820")
    return (
      <div
        className={props.left ? classes.aLeft : classes.aRight}
      >
        {arrowChain}
      </div>
    );

  if (window.width < "992")
    return (
      <div
        className={props.left ? classes.aLeft : classes.aRight}
      >
        {arrowChain}
      </div>
    );
  // Desktop
  else return null;
};

export default ArrowDragScroll;
