import React, { useEffect } from "react";
import { useTheme } from "react-jss";

import FooterCards from "../../Components/Cards/Layouts/FooterCards";
import Vignettes from "../../Components/Vignettes/Vignettes";
import Spacer from "../../Utils/Spacer/Spacer";
import DashContext from "../../Sections/Projects/Dashboard/DashContext";
import DashDesigns from "../../Sections/Projects/Dashboard/DashDesigns";
import DashIntroduction from "../../Sections/Projects/Dashboard/DashIntroduction";
import DashLibrary from "../../Sections/Projects/Dashboard/DashLibrary";
import DashProcess from "../../Sections/Projects/Dashboard/DashProcess";
import DashProduction from "../../Sections/Projects/Dashboard/DashProduction";
import DashRequierements from "../../Sections/Projects/Dashboard/DashRequierements";

//  Images
/// Hero
import heroPng from "../../Assets/Images/USMobile/System/Hero.png";
import heroWebp from "../../Assets/Images/USMobile/System/Hero.webp";

/// Footer
import systemPng from "../../Assets/Images/Footer/System.png";
import systemWebp from "../../Assets/Images/Footer/System.webp";
import matrixPng from "../../Assets/Images/Footer/Matrix.png";
import matrixWebp from "../../Assets/Images/Footer/Matrix.webp";
import starsFooterPng from "../../Assets/Images/Footer/Stars.png";
import starsFooterWebp from "../../Assets/Images/Footer/Stars.webp";
import { useMainColor } from "../../Hooks/useMainColor";

const Dashboard = () => {
  const theme = useTheme();
  const [color, setColor] = useMainColor();

  useEffect(() => {
    setColor(theme.usmobile.text);
  }, [setColor, theme.usmobile.text]);

  const CONTENT = {
    FOOTER: [
      {
        key: "1",
        reverse: true,
        title: { color: theme.text, value: "Previous" },
        background: {
          color: theme.usmobile.background,
          hover: theme.usmobile.hover,
        },
        // status: "loading",
        src: [systemPng, systemWebp],
        alt: "I'm an alt ",
        path: "/",
      },
      {
        key: "2",
        // reverse: false,
        title: { color: theme.text, value: "Random" },
        background: { color: theme.grey, hover: theme.hover },
        // status: "loading",
        src: [starsFooterPng, starsFooterWebp],
        alt: "I'm an alt ",
        path: "/",
      },
      {
        key: "3",
        // reverse: false,
        title: { color: theme.text, value: "Next" },
        background: {
          color: theme.usmobile.background,
          hover: theme.usmobile.hover,
        },
        // status: "stop",
        src: [matrixPng, matrixWebp],
        alt: "I'm an alt ",
        path: "/",
      },
    ],
  };

  return (
    <>
      <Vignettes
        hero
        src={[heroPng, heroWebp]}
        background={theme.usmobile.background}
      />
      <DashIntroduction color={color} />
      <DashContext />
      <DashProcess />
      <DashRequierements />
      <DashProduction />
      <Spacer c height={64} />
      <Vignettes
        big
        alt='Example of a user journey for the Starter Kit activation feature, with its backend and business rules'
        background={theme.usmobile.background}
      />
      <DashDesigns />
      <DashLibrary />

      {/* /// Footer */}
      <Spacer c height={80} />
      <FooterCards content={CONTENT.FOOTER} />
    </>
  );
};

export default Dashboard;
