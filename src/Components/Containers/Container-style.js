import { createUseStyles } from "react-jss";

const ContainerStyle = createUseStyles({
  Container: {
    maxWidth: "100%",
    height: "auto",
    padding: "0 16px",
    margin: "0 auto",
    zIndex: "5",

    "@media (min-width: 576px)": {
      padding: "0 24px",
    },

    "@media (min-width: 768px)": {
      padding: "0 32px",
    },

    "@media (min-width: 992px)": {
      width: "928px",
      padding: "0",
    },

    "@media (min-width: 1360px)": {
      width: "1120px",
      padding: "0",
    },
  },

  // Realm of the Big Container
  BigContainer: {
    overflow: "visible",
    maxWidth: "100%",
    padding: "0 16px",
    margin: "0 auto",
    zIndex: "1",

    "@media (min-width: 576px)": {
      padding: "0 24px",
    },

    "@media (min-width: 768px)": {
      padding: "0 32px",
    },

    "@media (min-width: 992px)": {
      width: "1148px",
      padding: "0",
    },

    "@media (min-width: 1360px)": {
      width: "1344px",
      padding: "0",
    },
  },

  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  flexAround: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  // Realm of the Dragable
  DragContainer: {
    position: "relative",
    WebkitOverflowScrolling: "touch",
    scrollSnapType: "x mandatory",
    overflowX: "scroll",
    overflowY: "visible",
    "&::-webkit-scrollbar": {
      display: "none",
    },

    "& div": {
      scrollSnapAlign: "center",
      scrollSnapStop: "always",
    },
    maxWidth: "100%",
    margin: "-160px auto",
    padding: "160px 16px",
    zIndex: "1",
  },

  ScrollFive: {
    display: "grid",
    gridTemplateColumns: "64px 1fr 1fr 1fr 1fr 1fr 64px",
    columnGap: "24px",

    "@media (min-width: 768px)": { columnGap: "32px" },
  },

  ScrollFour: {
    display: "grid",
    gridTemplateColumns: "64px 1fr 1fr 1fr 1fr 64px",
    columnGap: "24px",

    "@media (min-width: 768px)": { columnGap: "32px" },
  },

  ScrollThree: {
    display: "grid",
    gridTemplateColumns: "64px 1fr 1fr 1fr 64px",
    columnGap: "24px",

    "@media (min-width: 768px)": { columnGap: "32px" },
  },

  // Realm of the Full Container
  FullContainer: {
    position: "relative",
    overflow: "visible",
    // It is not needed at least for Frameless Devices
    maxWidth: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1",
  },
});

export default ContainerStyle;
