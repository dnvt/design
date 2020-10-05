import React from "react";
import { useTheme } from "react-jss";
import Spacer from "../Spacer";

const Verticaler = (props) => {
  const theme = useTheme();
  return <Spacer font height='100%' width={props.width} bg={theme.main50} />;
};

export default Verticaler;
