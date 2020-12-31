import React from "react";
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

const Dashboard = () => {
  const theme = useTheme();

  return (
    <>
      <Vignettes hero src={[]} background={theme.usmobile.background} />
      <DashIntroduction />
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
      <FooterCards
        footer
        title={{
          color: [theme.text, theme.text, theme.text],
          value: ["Previous", "Random", "Next"],
        }}
        background={{
          color: [theme.grey, theme.grey, theme.grey],
          hover: [theme.hover, theme.hover, theme.hover],
        }}
        status={["loading", "loading", "stop"]}
        src={["", "", ""]}
        alt={["", "", ""]}
      />
    </>
  );
};

export default Dashboard;
