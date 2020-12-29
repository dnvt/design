import React, { memo } from "react";
import { useTheme } from "react-jss";

import { useWindowSize } from "../../Hooks/useWindowSize";
import { useGridVisibility } from "../../Hooks/useGridVisibility";
import { useMenuVisibility } from "../../Hooks/useMenu";

import HeaderStyle from "./Header-style";
import Container from "../Containers/Container";
import MenuLink from "../../UI/Links/MenuLink/MenuLink";
import Spacer from "../../Utils/Spacer/Spacer";
import useDarkMode from "use-dark-mode";

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

  //  Header Variations
  /// Mobile
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
            {menu ? (
              <MenuLink
                noLink
                icon='grid'
                color={color[0]}
                hover={color[1]}
                active={color[2]}
                left={visibility ? "-46px" : "-49px"}
              />
            ) : (
              <MenuLink
                value='François Denavaut'
                to='/'
                color={color[0]}
                hover={color[0]}
              />
            )}
            {menu && (
              <MenuLink
                noLink
                icon='theme'
                color={color[0]}
                hover={color[1]}
                left={darkMode.value ? "-60px" : "-56px"}
              />
            )}

            <MenuLink icon='menu' color={color[0]} />
          </nav>
        </header>
      </Container>
    );

  ///
  /// Desktop
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
            to='/'
            color={color[0]}
            hover={color[0]}
          />
          {spacer}
          <MenuLink
            icon='mouseOn'
            iconHover='mouseOff'
            value='Work'
            color={color[0]}
            hover={color[0]}
          />
          {spacer}
          <MenuLink
            icon='cheeseOn'
            iconHover='cheeseOff'
            value='Playground'
            color={color[0]}
            hover={color[0]}
          />
          {spacer}
          <MenuLink
            icon='smileyOn'
            iconHover='smileyOff'
            value='About'
            color={color[0]}
            hover={color[0]}
          />
          {spacer}
          <MenuLink
            to='/guidelines'
            icon='guidelinesOn'
            iconHover='guidelinesOff'
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
          {iconSpacer}
          <MenuLink
            noLink
            icon='grid'
            color={color[0]}
            hover={color[1]}
            active={color[2]}
            tooltip={visibility ? "Hide Grid" : "Show Grid"}
            left={visibility ? "-46px" : "-49px"}
          />
          {/* // Debugging Mobile

          {iconSpacer}
          <MenuLink icon='menu' color={color[0]} /> 
          
          */}
        </nav>
      </header>
    </Container>
  );
};
export default memo(Header);
