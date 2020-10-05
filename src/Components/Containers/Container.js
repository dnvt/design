import React from "react";
import Verticaler from "../../Utils/Spacer/Variations/Verticaler";
import ArrowDragScroll from "../ArrowSignals/ArrowDragSignal";
import ContainerStyle from "./Container-style";

// TODO
// Wanna add Spacer as a variable within
// the Container component
// <Container ...props spacer={VALUE}></Container>

const Container = (props) => {
  const classes = ContainerStyle();

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
  if (props.drag && props.frameless)
    return (
      <div className={classes.FullContainer}>
        <ArrowDragScroll big left />
        <div className={classes.FramelessDragContainer}>
          <div className={classes.imageScrollCards}>
            <div>
              <Verticaler width='64px' />
            </div>
            {props.children}
            <div>
              <Verticaler width='64px' />
            </div>
          </div>
        </div>
        <ArrowDragScroll big right />
      </div>
    );

  if (props.drag && props.mobileFour)
    return (
      <div className={classes.FullContainer}>
        <ArrowDragScroll big left />
        <div className={classes.FramelessDragContainer}>
          <div className={classes.mobileScrollList}>
            <div>
              <Verticaler width='64px' />
            </div>
            {props.children}
            <div>
              <Verticaler width='64px' />
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
