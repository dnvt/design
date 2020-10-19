import React from "react";

// import HomepageStyle from "./Homepage-style";
import Spacer from "../Utils/Spacer/Spacer";
import FontHero from "../Components/Hero/FontHero";
import { Work } from "../Sections/Homepage/Work";
import { Introduction } from "../Sections/Homepage/Introduction";

const Homepage = () => {
  return (
    <>
      <Spacer container height={8} />
      <FontHero value='François' />
      <Introduction />
      <Spacer container height={184} />
      <Work />
    </>
  );
};

export default Homepage;
