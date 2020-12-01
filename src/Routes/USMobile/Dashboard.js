import React from "react";
import { useTheme } from "react-jss";
import Vignettes from "../../Components/Vignettes/Vignettes";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <>
      <Vignettes hero src={[]} background={theme.usmobile.background} />
    </>
  );   
};

export default Dashboard;
