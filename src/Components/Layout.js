import React from "react";

import Grid from "../Utils/Grid/Grid";
import Header from "./Header/Header";
import Sidelines from "../Utils/Sidelines/Sidelines";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Grid>
        <Header />
        <Sidelines />
        {props.children}
        <Footer />
      </Grid>
    </>
  );
};

export default Layout;
