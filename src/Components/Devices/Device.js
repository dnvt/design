import React, { memo } from "react";
import { useTheme } from "react-jss";
import Image from "../../Utils/Image/Image";
import DeviceStyle from "./Device-style";

const Device = (props) => {
  const theme = useTheme();
  const classes = DeviceStyle({ ...props, theme });

  // Browser device
  const browser = (
    <div className={classes.browserContent}>
      <div className={classes.tricolor}></div>
      <Image src={props.src} alt={props.alt} />
    </div>
  );

  // Browser headerless device
  const browserLess = (
    <div className={classes.browserLessContent}>
      <Image fullWidth src={props.src} alt={props.alt} />
    </div>
  );

  // Mobile device
  const mobile = (
    <div className={classes.mobileContent}>
      <div className={classes.ligns}></div>
      <Image cl='mobile' src={props.src} alt={props.alt} />
      <div className={classes.camera}>
        <div className={classes.sound}></div>
      </div>
    </div>
  );

  // Frameless device
  const frameless = (
    <div className={classes.shadowContent}>
      <Image src={props.src} alt={props.alt} />
    </div>
  );

  // Switch passing the props device
  let device = null;

  switch (true) {
    case props.browserLess:
      device = browserLess;
      break;
    case props.browser:
      device = browser;
      break;
    case props.mobile:
      device = mobile;
      break;
    case props.frameless:
      device = frameless;
      break;
    default:
      console.warn("Wrong device type here!");
      break;
  }

  return device;
};

export default memo(Device);
