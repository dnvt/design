import React from "react";
import { useTheme } from "react-jss";
import Spacer from "../../Utils/Spacer/Spacer";
import ArrowDragScroll from "../ArrowSignals/ArrowDragSignal";
import ContainerStyle from "./Container-style";

const Container = (props) => {
  const classes = ContainerStyle();
  const theme = useTheme();

  // Full Container
  // <Container full>{ children }</Container
  if (props.full)
    return <div className={classes.FullContainer}>{props.children}</div>; 

  // Big Container
  // <Container big>{ children }</Container>
  if (props.big)
    return (
      <div className={classes.BigContainer}>
        <div className={props.center ? classes.flexCenter : classes.flexAround}>
          {props.children}
        </div>
      </div>
    );

  // Drag & Frameless Container
  // <Container drag frameless>{ children }</Container>

  // TODO > Handle the padding of this
  // The shadows get truncated currently
  if (props.drag && props.frameless)
    return (
      <div className={classes.FullContainer}>
        <ArrowDragScroll big left />
        <div className={classes.FramelessDragContainer}>
          <div className={classes.imageScrollCards}>
            <div>
              <Spacer font height='100%' width='64px' bg={theme.main50} />
            </div>
            {props.children}
            <div>
              <Spacer font height='100%' width='64px' bg={theme.main50} />
            </div>
          </div>
        </div>
        <ArrowDragScroll big right />
      </div>
    );

  // Else default case
  // <Container>{ children }</Container>
  return <div className={classes.Container}>{props.children}</div>;
};

export default Container;
