import React from "react";
// import browserP from "../../Assets/Images/Guidelines/browser1.png";
// import browserW from "../../Assets/Images/Guidelines/browser1.webp";
import Spacer from "../../Utils/Spacer/Spacer";
import DragMobileFour from "../../Components/Devices/Layouts/DragMobileFour";
import DragFramelessFive from "../../Components/Devices/Layouts/DragFramelessFive";
import GroupedMobileDesktop from "../../Components/Devices/Layouts/GroupedMobileDesktop";

export const DeviceSection = () => {
  // const images = [browserP, browserW];

  return (
    <>
      <Spacer container height={40} />
      <DragMobileFour src={[]} />

      <Spacer container height={80} />
      <GroupedMobileDesktop srcDesktop={[]} srcMobile={[]} />

      <Spacer container height={80} />
      <DragFramelessFive src={[]} />
    </>
  );
};
