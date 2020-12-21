import React from "react";

import Grid from "../Utils/Grid/Grid";
import Header from "./Header/Header";
import Sidelines from "../Utils/Sidelines/Sidelines";
import Footer from "./Footer/Footer";
import { useMenuVisibility } from "../Hooks/useMenu";
import Menu from "./Menu/Menu";

const Layout = (props) => {
  const [menu] = useMenuVisibility();

  return (
    <>
      <Grid>
        <Header />
        {menu && <Menu />}
        <Sidelines />
        {props.children}
        <Footer />
      </Grid>
    </>
  );
};

export default Layout;
