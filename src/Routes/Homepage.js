import React from "react";

// import HomepageStyle from "./Homepage-style";
import Spacer from "../Utils/Spacer/Spacer";
import FontHero from "../Components/Hero/FontHero";
import USMWork from "../Sections/Homepage/USMWork";
import Introduction from "../Sections/Homepage/Introduction";
import SelectedWork from "../Sections/Homepage/SelectedWork";
import SideProjects from "../Sections/Homepage/SideProjects";

const Homepage = () => {
  return (
    <>
      <Spacer container height={8} />
      <FontHero value='François' />
      <Introduction />
      <Spacer container height={184} />
      <USMWork />
      <SelectedWork />
      <SideProjects />
    </>
  );
};

export default Homepage;
