import React, { memo, useEffect } from "react";
import { useTheme } from "react-jss";

import { useWindowSize } from "../../Hooks/useWindowSize";
import { useGridVisibility } from "../../Hooks/useGridVisibility";
import { useMenuVisibility } from "../../Hooks/useMenu";
import { useTooltip } from "../../Hooks/useTooltip";

import HeaderStyle from "./Header-style";
import Container from "../Containers/Container";
import MenuLink from "../../UI/Links/MenuLink/MenuLink";
import Spacer from "../../Utils/Spacer/Spacer";
import useDarkMode from "use-dark-mode";
import useHover from "../../Hooks/useHover";

const Header = (props) => {
  const theme = useTheme();
  const window = useWindowSize();
  const darkMode = useDarkMode();
  const [visibility] = useGridVisibility();
  const [hint, setHint] = useTooltip();
  const [hoveredRef1, isHovered1] = useHover();
  const [hoveredRef2, isHovered2] = useHover();
  const [hoveredRef3, isHovered3] = useHover();
  const [hoveredRef4, isHovered4] = useHover();
  const [hoveredRef5, isHovered5] = useHover();
  const [hoveredRef6, isHovered6] = useHover();
  const [hoveredRef7, isHovered7] = useHover();
  const [menu] = useMenuVisibility();

  const classes = HeaderStyle({ ...props, theme });
  const color = [theme.text, theme.main, theme.secondary];

  const tooltipMenu =
    isHovered2 || isHovered3 || isHovered4 || isHovered6 || isHovered7;

  const spacer = (
    <Spacer font height='100%' width={window.width > 1360 ? 40 : 32} />
  );
  const iconSpacer = (
    <Spacer font height='100%' width={window.width > 1360 ? 32 : 24} />
  );

  // Set hint for tooltip timing
  useEffect(() => {
    let comingUp;
    let comingDown;

    if (tooltipMenu) {
      clearTimeout(comingDown);
      comingUp = setTimeout(function () {
        setHint(true);
      }, 650);
    } else if (!tooltipMenu) {
      clearTimeout(comingUp);
      if (hint) {
        comingDown = setTimeout(function () {
          setHint(false);
        }, 1200);
      }
    }

    return () => {
      clearTimeout(comingUp);
      clearTimeout(comingDown);
    };
  }, [tooltipMenu, setHint, hint]);

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
            hoveredRef={hoveredRef1}
            isHovered={isHovered1}
            value='François Denavaut'
            to='/'
            color={color[0]}
            hover={color[0]}
          />
          {spacer}
          <MenuLink
            hoveredRef={hoveredRef2}
            isHovered={isHovered2}
            icon='mouseOn'
            iconHover='mouseOff'
            value='Work'
            wip
            hint={hint}
            tooltip='Under Construction'
            color={color[0]}
            hover={color[0]}
            left="-58px"
            />
          {spacer}
          <MenuLink
            hoveredRef={hoveredRef3}
            isHovered={isHovered3}
            icon='cheeseOn'
            iconHover='cheeseOff'
            value='Playground'
            wip
            hint={hint}
            tooltip='Under Construction'
            color={color[0]}
            hover={color[0]}
            left="-28px"
            />
          {spacer}
          <MenuLink
            hoveredRef={hoveredRef4}
            isHovered={isHovered4}
            icon='smileyOn'
            iconHover='smileyOff'
            value='About'
            wip
            hint={hint}
            tooltip='Under Construction'
            color={color[0]}
            hover={color[0]}
            left="-55px"
          />
          {spacer}
          <MenuLink
            hoveredRef={hoveredRef5}
            isHovered={isHovered5}
            to='/guidelines'
            icon='guidelinesOn'
            iconHover='guidelinesOff'
            value='Guidelines'
            color={color[0]}
            hover={color[0]}
          />
          {iconSpacer}
          <MenuLink
            hoveredRef={hoveredRef6}
            isHovered={isHovered6}
            noLink
            hint={hint}
            icon='theme'
            color={color[0]}
            hover={color[1]}
            tooltip={darkMode.value ? "Light Theme" : "Dark Theme"}
            left={darkMode.value ? "-60px" : "-56px"}
          />
          {iconSpacer}
          <MenuLink
            hoveredRef={hoveredRef7}
            isHovered={isHovered7}
            noLink
            hint={hint}
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
