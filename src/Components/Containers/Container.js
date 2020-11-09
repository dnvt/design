import React from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import Verticaler from "../../Utils/Spacer/Variations/Verticaler";
import ArrowDragScroll from "../../Utils/ArrowSignals/ArrowDragSignal";
import ContainerStyle from "./Container-style";

// TODO
// Wanna add Spacer as a variable within
// the Container component
// <Container ...props spacer={VALUE}></Container>

const Container = (props) => {
  const window = useWindowSize();
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

  // Group container
  // <Container group (left||null)>{ children }</Container>
  if (props.group)
    return (
      <div className={classes.Container}>
        <div className={props.left ? classes.GroupLeft : classes.GroupRight}>
          {props.children}
        </div>
      </div>
    );

  // Drag Container
  // <Container drag number>{ children }</Container>
  let scrollNumber;

  if (props.drag) {
    switch (true) {
      case props.five:
        scrollNumber = classes.ScrollFive;
        break;
      case props.four:
        scrollNumber = classes.ScrollFour;
        break;
      case props.three:
        scrollNumber = classes.ScrollThree;
        break;
      default:
        console.warn("You got the ScrollNumber wrong buddy!");
        break;
    }

    return (
      <div className={classes.FullContainer}>
        <ArrowDragScroll big left />
        <div className={classes.DragContainer}>
          <div className={scrollNumber}>
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
  }

  // Footer drag Container
  // TODO Add conditional on the Arrows to be displayed or Not
  if (props.footer) {
    if (window.width < "992") {
      return (
        <div className={classes.FullContainer}>
          <ArrowDragScroll big left />
          <div className={classes.DragContainer}>
            <div className={classes.ScrollThree}>
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
    }
    return (
      <div className={classes.Container}>
        <div className={classes.FooterCards}>{props.children}</div>
      </div>
    );
  }

  // Vertical grid need height 100%
  if (props.height) {
    return (
      <div className={classes.Container} style={{ height: "100%" }}>
        {props.children}
      </div>
    );
  }

  // Else default case
  // <Container>{ children }</Container>
  return <div className={classes.Container}>{props.children}</div>;
};

export default Container;
