import React, { memo } from "react";
import { useTheme } from "react-jss";

import { useWindowSize } from "../../Hooks/useWindowSize";
import { useGridVisibility } from "../../Hooks/useGridVisibility";

import HeaderStyle from "./Header-style";
import Container from "../Containers/Container";
import MenuLink from "../../UI/Links/MenuLink/MenuLink";
import Spacer from "../../Utils/Spacer/Spacer";
import useDarkMode from "use-dark-mode";
import { useMenuVisibility } from "../../Hooks/useMenu";

const Header = (props) => {
  const theme = useTheme();
  const window = useWindowSize();
  const darkMode = useDarkMode();
  const [visibility] = useGridVisibility();
  const [menu] = useMenuVisibility();

  const classes = HeaderStyle({ ...props, theme });
  const color = [theme.text, theme.main, theme.secondary];

  const spacer = (
    <Spacer font height='100%' width={window.width > 1360 ? 40 : 32} />
  );
  const iconSpacer = (
    <Spacer font height='100%' width={window.width > 1360 ? 32 : 24} />
  );

  if (window.width < 767)
    return (
      <Container>
        <header
          className={classes.menu}
          style={{
            position: "fixed",
            width: "calc(100% - 32px)",
            zIndex: "1000",
          }}
        >
          <nav className={classes.nav}>
            <MenuLink
              value={!menu ? "François Denavaut" : " "}
              color={color[0]}
              hover={color[1]}
            />

            <MenuLink icon='menu' color={color[0]} />
          </nav>
        </header>
      </Container>
    );

  return (
    <Container>
      <header
        className={classes.menu}
        style={
          props.position ? { position: "relative" } : { position: "fixed" }
        }
      >
        <nav className={classes.nav}>
          <MenuLink
            value='François Denavaut'
            color={color[0]}
            hover={color[0]}
          />
          {spacer}
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
          {iconSpacer}
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
          {iconSpacer}
          <MenuLink icon='menu' color={color[0]} />
        </nav>
      </header>
    </Container>
  );
};
export default memo(Header);
