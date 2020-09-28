import React from "react";
import { useTheme } from "react-jss";

import { useWindowSize } from "../../Hooks/useWindowSize";

import HeaderStyle from "./Header-style";
import Container from "../Containers/Container";
import MenuLink from "../../UI/Links/MenuLink/MenuLink";
import Spacer from "../../Utils/Spacer/Spacer";

// TODO
// Check the header on mobile
// [ ] - Not full width
// [ ] - Not fixed

const Header = (props) => {
  const theme = useTheme();
  const window = useWindowSize();
  const classes = HeaderStyle({ ...props, theme });
  const color = [theme.text, theme.main, theme.secondary];

  const spacer = (
    <Spacer font height='100%' width={window.width > 1360 ? 40 : 32} />
  );
  const iconSpacer = (
    <Spacer font height='100%' width={window.width > 1360 ? 32 : 24} />
  );
  const mobileSpacer = (
    <Spacer font height='100%' width={window.width > 1360 ? 16 : 8} />
  );

  if (window.width > 767)
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
              icon='grid'
              color={color[0]}
              hover={color[1]}
              active={color[2]}
            />
            {iconSpacer}
            <MenuLink noLink icon='theme' color={color[0]} hover={color[1]} />
          </nav>
        </header>
      </Container>
    );

  return (
    <Container>
      <header className={classes.menuMobile}>
        <nav className={classes.nav}>
          <MenuLink
            value='François Denavaut'
            color={color[0]}
            hover={color[1]}
          />
          <div>
            <MenuLink
              icon='grid'
              color={color[0]}
              hover={color[1]}
              active={color[2]}
            />
            {mobileSpacer}
            <MenuLink icon='theme' color={color[0]} hover={color[1]} />
            {mobileSpacer}
            <MenuLink icon='hash' color={color[0]} hover={color[1]} />
          </div>
        </nav>
      </header>
    </Container>
  );
};
export default Header;
