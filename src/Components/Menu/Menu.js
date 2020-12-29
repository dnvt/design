import React from "react";

import { useTheme } from "react-jss";
// import useDarkMode from "use-dark-mode";
// import { useGridVisibility } from "../../Hooks/useGridVisibility";
import { useMenuVisibility } from "../../Hooks/useMenu";
// import { useDarkTheme } from "../../Hooks/useTheme";

import MenuLink from "../../UI/Links/MenuLink/MenuLink";
import Font from "../../Utils/Font/Font";
import Spacer from "../../Utils/Spacer/Spacer";
import Container from "../Containers/Container";
import MenuStyle from "./Menu-style";

const Wrap = (props) => {
  const [menu, setMenu] = useMenuVisibility();
  return <div onClick={() => setMenu(!menu)}>{props.children}</div>;
};

///
const Menu = (props) => {
  // const [visibility, setVisibility] = useGridVisibility();
  const theme = useTheme();
  const classes = MenuStyle({ ...props, theme });
  // const darkMode = useDarkTheme();
  // const dark = useDarkMode();

  const color = [theme.text, theme.main, theme.secondary];
  const spacer = <Spacer font height='64px' width='100%' />;

  return (
    <div className={classes.Menu}>
      <Container>
        <div className={classes.hash}>
          <nav className={classes.nav}>
            <Wrap>
              <MenuLink
                icon='loading'
                value='Homepage'
                color={color[0]}
                hover={color[0]}
              />
            </Wrap>
            {spacer}
            <Wrap>
              <MenuLink
                icon='mouseOn'
                iconHover='mouseOff'
                value='Work'
                color={color[0]}
                hover={color[0]}
              />
            </Wrap>
            {spacer}
            <Wrap>
              <MenuLink
                icon='cheeseOn'
                iconHover='cheeseOff'
                value='Playground'
                color={color[0]}
                hover={color[0]}
              />
            </Wrap>
            {spacer}
            <Wrap>
              <MenuLink
                icon='smileyOn'
                iconHover='smileyOff'
                value='About'
                color={color[0]}
                hover={color[0]}
              />
            </Wrap>
            {spacer}
            <Wrap>
              <MenuLink
                to='/guidelines'
                icon='guidelinesOn'
                iconHover='guidelinesOff'
                value='Guidelines'
                color={color[0]}
                hover={color[0]}
              />
            </Wrap>
            {spacer}
          </nav>
        </div>
        <div className={classes.hashContain}>
          <Font type='hero'>#</Font>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
