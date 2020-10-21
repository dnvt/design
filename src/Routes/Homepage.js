import React from "react";

// import HomepageStyle from "./Homepage-style";
import Spacer from "../Utils/Spacer/Spacer";
import FontHero from "../Components/Hero/FontHero";
import USMWork from "../Sections/Homepage/USMWork";
import Introduction from "../Sections/Homepage/Introduction";
import SelectedWork from "../Sections/Homepage/SelectedWork";
import SideProjects from "../Sections/Homepage/SideProjects";
import About from "../Sections/Homepage/About";

const Homepage = () => {
  return (
    <>
      <Spacer c height={8} />
      <FontHero value='François' />
      <Introduction />
      <Spacer c height={184} />
      <USMWork />
      <Spacer c height={104} />
      <SelectedWork />
      <Spacer c height={184} />
      <SideProjects />
      <Spacer c height={184} />
      <About />
    </>
  );
};

export default Homepage;
