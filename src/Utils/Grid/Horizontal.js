import React from "react";
import { useTheme } from "react-jss";

import HorizontalStyle from "./Horizontal-style";
import { useDocumentSize } from "../../Hooks/useDocumentSize";

const Horizontal = (props) => {
  const theme = useTheme();
  const classes = HorizontalStyle({ ...props, theme });

  const document = useDocumentSize();

  const rowNumber = Math.trunc(document.height / 8);
  const rowArray = [];

  for (let index = 0; index < rowNumber; index++) {
    rowArray.push(<div key={index} className={classes.Row}></div>);
  }

  return <div className={classes.Horizontal}>{rowArray}</div>;
};

export default Horizontal;
