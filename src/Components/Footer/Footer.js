import React, { memo } from "react";
// import FooterStyle from "./Footer-style";
import Spacer from "../../Utils/Spacer/Spacer";
import { useWindowSize } from "../../Hooks/useWindowSize";
import Container from "../Containers/Container";
import { useTheme } from "react-jss";
import Font from "../../Utils/Font/Font";
import ExternalLink from "../../UI/Links/ExternalLink/ExternalLink";

const Footer = (props) => {
  const window = useWindowSize();
  const theme = useTheme();

  const menuList = (
    <div
      style={
        window.width > "768"
          ? { display: "flex" }
          : { display: "block", padding: "8px 0" }
      }
    >
      <ExternalLink path='/' color={theme.text} value='Dribbble' />
      <ExternalLink path='/' color={theme.text} value='Github' />
      <ExternalLink path='/' color={theme.text} value='Twitter' />
      <ExternalLink path='/' color={theme.text} value='LinkedIn' />
      <ExternalLink path='/' color={theme.text} value='Email' />
    </div>
  );

  return (
    <>
      <footer style={{ height: "auto" }}>
        <Container>
          <Spacer height={window.width > 767 ? 80 : 64} />
          <Font type='legend' color={props.color || theme.main}>
            More of me at
          </Font>

          {/* List of footer menus */}
          {menuList}

          <Spacer height={16} />
          <Font type='legend' color={theme.legend}>
            {"©" + new Date().getFullYear() + ". Made with Figma and Reactjs."}
          </Font>

          <Spacer height={40} />
        </Container>
      </footer>
    </>
  );
};

export default memo(Footer);
