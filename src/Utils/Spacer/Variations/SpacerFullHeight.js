import React from "react";
import { useTheme } from "react-jss";
import { useWindowSize } from "../../../Hooks/useWindowSize";

import Spacer from "../Spacer";

const SpacerFullHeight = () => {
  const theme = useTheme();
  const window = useWindowSize();

  if (window.width > "1360") {
    return (
      <Spacer font value='80' height='736px' width='80px' bg={theme.main50} />
    );
  }
  if (window.width > "992") {
    return (
      <Spacer font value='64' height='600px' width='64px' bg={theme.main50} />
    );
  } else {
    return (
      <Spacer font value='40' height='40px' width='100%' bg={theme.main50} />
    );
  }
};

export default SpacerFullHeight;
