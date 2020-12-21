import React from "react";
import { useTheme } from "react-jss";
import FontHero from "../../Components/Hero/FontHero";
import { useGridVisibility } from "../../Hooks/useGridVisibility";
import { useDarkTheme } from "../../Hooks/useTheme";
import MenuLink from "../../UI/Links/MenuLink/MenuLink";
import Spacer from "../../Utils/Spacer/Spacer";
import Container from "../Containers/Container";
import MenuStyle from "./Menu-style";

const Menu = () => {
  const [visibility] = useGridVisibility();
  const darkMode = useDarkTheme();
  const theme = useTheme();
  const classes = MenuStyle();

  const color = [theme.text, theme.main, theme.secondary];
  const spacer = <Spacer font height='40px' width='100%' />;

  return (
    <div className={classes.Menu}>
      <Container>
        <div className={classes.hash}>
          <nav className={classes.nav}>
            <MenuLink
              icon='mouse'
              value='Work'
              color={color[0]}
              hover={color[0]}
            />
            {spacer}
            <MenuLink
              icon='mouse'
              value='Playground'
              color={color[0]}
              hover={color[0]}
            />
            {spacer}
            <MenuLink
              icon='smiley'
              value='About'
              color={color[0]}
              hover={color[0]}
            />
            {spacer}
            <MenuLink
              to='/guidelines'
              icon='guidelines'
              value='Guidelines'
              color={color[0]}
              hover={color[0]}
            />
            {spacer}
            <MenuLink
              noLink
              icon='theme'
              color={color[0]}
              hover={color[1]}
              tooltip={darkMode.value ? "Light Theme" : "Dark Theme"}
              left={darkMode.value ? "-60px" : "-56px"}
            />
            {spacer}
            <MenuLink
              noLink
              icon='grid'
              color={color[0]}
              hover={color[1]}
              active={color[2]}
              tooltip={visibility ? "Hide Grid" : "Show Grid"}
              left={visibility ? "-46px" : "-49px"}
            />
          </nav>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            bottom: "-40px",
            marginLeft: "-30px",
          }}
        >
          <FontHero value='#' />
        </div>
      </Container>
    </div>
  );
};

export default Menu;
