import React from "react";
import { useTheme } from "react-jss";

import VerticalStyle from "./Vertical-style";
import { useWindowSize } from "../../Hooks/useWindowSize";
import Container from "../../Components/Containers/Container";

const Vertical = (props) => {
  const theme = useTheme();
  const classes = VerticalStyle({ ...props, theme });
  const window = useWindowSize();

  const breakpoints = [576, 768, 992, 1360];
  let rowNumber = 12;

  switch (true) {
    case window.width < breakpoints[0]:
      rowNumber = 1;
      break;
    case window.width < breakpoints[1]:
      rowNumber = 2;
      break;
    case window.width < breakpoints[2]:
      rowNumber = 12;
      break;
    default:
      rowNumber = 12;
      break;
  }

  const rowArray = [];

  for (let index = 0; index < rowNumber; index++) {
    rowArray.push(<div key={index}></div>);
  }

  return (
    <div className={classes.Vertical}>
      <Container height>
        <div className={classes.Column}>{rowArray}</div>
      </Container>
    </div>
  );
};

export default Vertical;
