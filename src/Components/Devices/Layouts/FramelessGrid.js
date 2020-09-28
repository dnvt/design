import React from "react";
import Container from "../../Containers/Container";

import { ArrowDragScroll } from "./cardsLayout";

export function ShadowImageGrid({ visibility }) {
  const classesStyles = utilsStyles();
  const classes = useStyles();

  return (
    <Container
      big
      style={{
        padding: "20px 0 220px 0",
        marginTop: "-20px",
        marginBottom: "-220px",
      }}
    >
      <ArrowDragScroll big left visibility={visibility} />
      <div className={classesStyles.imageScrolledContainer}>
        <div className={classes.FramelessScrollGroup}>
          <div>
            <Spacing
              width='64px'
              visibility={visibility}
              value='64'
              height='auto'
            />
          </div>
          <Devices
            src={"./img/usmobile/mobile"}
            alt={"Legacy version of the dashboard"}
          />
          <Devices
            src={"./img/usmobile/mobile"}
            alt={"Legacy version of the dashboard"}
          />
          <Devices
            src={"./img/usmobile/mobile"}
            alt={"Legacy version of the dashboard"}
          />
          <Devices
            src={"./img/usmobile/mobile"}
            alt={"Legacy version of the dashboard"}
          />
          <Devices
            src={"./img/usmobile/mobile"}
            alt={"Legacy version of the dashboard"}
          />
          <div>
            <Spacing
              width='64px'
              visibility={visibility}
              value='64'
              height='auto'
            />
          </div>
        </div>
      </div>
      <ArrowDragScroll big right visibility={visibility} />
    </Container>
  );
}
