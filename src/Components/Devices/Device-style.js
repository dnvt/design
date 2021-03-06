import { createUseStyles } from "react-jss";

const DeviceStyle = createUseStyles({
  // Browser
  browserContent: {
    display: "flex",
    justifyContent: "center",
    zIndex: "90",
    position: "relative",
    paddingTop: "20px",
    boxShadow: ({ theme }) => theme.shadow,
    background: ({ theme }) => theme.tint,
    borderRadius: "6px",
    overflow: "hidden",
    width: "auto",
    maxWidth: "100%",
    height: "284px",
    transition: "background .15s ease, box-shadow .15s ease",
    "@media (min-width: 576px)": {
      height: "428px",
    },
    "@media (min-width: 768px)": {
      height: "568px",
      paddingTop: "32px",
      borderRadius: "8px",
      minWidth: "704px",
      width: "100%",
    },
    "@media (min-width: 1360px)": {
      height: "704px",
    },
  },
  browserLessContent: {
    display: "flex",
    justifyContent: "center",
    zIndex: "90",
    position: "relative",
    boxShadow: ({ theme }) => theme.shadow,
    background: ({ theme }) => theme.tint,
    borderRadius: "6px",
    overflow: "hidden",
    width: "auto",
    maxWidth: "100%",
    height: "364px",
    transition: "background .15s ease, box-shadow .15s ease",
    "@media (min-width: 576px)": {
      height: "428px",
    },
    "@media (min-width: 768px)": {
      height: "568px",
      borderRadius: "8px",
      minWidth: "808px",
      width: "100%",
    },
    "@media (min-width: 1360px)": {
      height: "832px",
    },
  },
  tricolor: {
    position: "absolute",
    top: "7px",
    left: "18px",
    width: "6px",
    height: "6px",
    borderRadius: "100%",
    background: "#FDBC40",
    "&:after": {
      content: "''",
      position: "absolute",
      left: "10px",
      width: "6px",
      height: "6px",
      borderRadius: "100%",
      background: "#34C749",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      left: "-10px",
      width: "6px",
      height: "6px",
      borderRadius: "100%",
      background: "#FC605C",
    },
    "@media (min-width: 768px)": {
      top: "12px",
      left: "24px",
      width: "8px",
      height: "8px",
      borderRadius: "100%",
      background: "#FDBC40",
      "&:after": {
        content: "''",
        position: "absolute",
        left: "14px",
        width: "8px",
        height: "8px",
        borderRadius: "100%",
        background: "#34C749",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        left: "-14px",
        width: "8px",
        height: "8px",
        borderRadius: "100%",
        background: "#FC605C",
      },
    },
  },
  devices: {
    width: "auto",
    position: "relative",
    height: "100%",
    objectFit: "cover",
    "@media (min-width: 576px)": {
      minWidth: "100%",
    },
  },

  // Mobile
  mobileContent: {
    zIndex: "1",
    position: "relative",
    padding: "12px",
    boxShadow: ({ theme }) => theme.shadow,
    background: ({ theme }) => theme.tint,
    borderRadius: "36px",
    overflow: "hidden",
    width: "249px",
    objectFit: "cover",
    height: "512px",
    "& img": {
      borderRadius: "22px",
      height: "100%",
    },

    "@media (min-width: 768px)": {
      minWidth: "281px",
      height: "576px",
      borderRadius: "40px",
      padding: "14px",
      "& img": {
        borderRadius: "28px",
        height: "100%",
      },
    },
    "@media (min-width: 1360px)": {
      height: "704px",
      minWidth: "342px",
      borderRadius: "55px",
      padding: "16px",
      "& img": {
        borderRadius: "42px",
        height: "100%",
      },
    },
    "& loading": { borderRadius: "40px" },
  },
  camera: {
    position: "absolute",
    top: "0",
    left: "26%",
    content: "''",
    width: "48%",
    height: "5.7%",
    borderRadius: "0 0 12px 12px",
    background: ({ theme }) => theme.tint,

    "@media (min-width: 1360px)": {
      borderRadius: "0 0 20px 20px",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      width: "8px",
      height: "8px",
      left: "-6px",
      background: ({ theme }) =>
        "radial-gradient(circle at top left,transparent 20px, " +
        theme.tint +
        " 0) top left, radial-gradient(circle at top right,transparent 20px, " +
        theme.tint +
        " 0) top right, radial-gradient(circle at bottom left,transparent 8px, " +
        theme.tint +
        " 0) bottom left, radial-gradient(circle at bottom right,transparent 20px, " +
        theme.tint +
        " 0) bottom right",
      top: "12px",
      "@media (min-width: 768px)": {
        top: "14px",
        left: "-7px",
      },
      "@media (min-width: 1360px)": {
        top: "16px",
        left: "-8px",
      },
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "8px",
      height: "8px",
      right: "-6px",

      background: ({ theme }) =>
        "radial-gradient(circle at top left,transparent 20px, " +
        theme.tint +
        " 0) top left, radial-gradient(circle at top right,transparent 20px, " +
        theme.tint +
        " 0) top right, radial-gradient(circle at bottom left,transparent 20px, " +
        theme.tint +
        " 0) bottom left, radial-gradient(circle at bottom right,transparent 8px, " +
        theme.tint +
        " 0) bottom right",
      top: "12px",
      "@media (min-width: 768px)": {
        top: "14px",
        right: "-7px",
      },
      "@media (min-width: 1360px)": {
        top: "16px",
        right: "-8px",
      },
    },
  },
  sound: {
    position: "absolute",
    width: "25%",
    height: "10%",
    background: ({ theme }) => theme.outline,
    zIndex: "3",
    top: "50%",
    left: "37.5%",
    borderRadius: "20px",
  },
  ligns: {
    position: "absolute",
    top: "10%",
    left: "0",
    width: "100%",
    height: "80%",
    zIndex: "-1",
    borderTop: ({ theme }) => theme.borderDevice,
    borderBottom: ({ theme }) => theme.borderDevice,
  },

  // Frameless
  shadowContent: {
    zIndex: "90",
    position: "relative",
    boxShadow: ({ theme }) => theme.shadow,
    background: ({ theme }) => theme.tint,
    overflow: "hidden",
    width: "236px",
    objectFit: "cover",
    height: "512px",

    "@media (min-width: 768px)": {
      minWidth: "270px",
      height: "576px",
    },
    "@media (min-width: 1360px)": {
      height: "704px",
      minWidth: "325px",
    },
  },
});

export default DeviceStyle;
