import React from "react";
import Spacer from "../../Utils/Spacer/Spacer";
import { useTheme } from "react-jss";
import Container from "../../Components/Containers/Container";
import Font from "../../Utils/Font/Font";
import useDarkMode from "use-dark-mode";
import { useWindowSize } from "../../Hooks/useWindowSize";
import Tooltip from "../../UI/Tooltip/Tooltip";

const ColorSwatch = (props) => {
  const theme = useTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          height: 64,
          background: props.color,
          transition: "background .1s ease",
        }}
      ></div>
      <Spacer height={8} />
      <div>
        <Font type='text'>
          {props.name}
          <span
            style={
              props.gradient
                ? {
                    lineHeight: "24px",
                    margin: "6px 0px 2px",
                    display: "block",
                  }
                : { display: "block" }
            }
            color={theme.legend}
          >
            {props.value}
          </span>
        </Font>
      </div>
      <Spacer height={16} />
    </div>
  );
};

const UtilsSection = (props) => {
  const theme = useTheme();
  const darkMode = useDarkMode();
  const window = useWindowSize();
  const spacer = <Spacer font bg={theme.main50} height='8px' />;

  let colorGrid = null;
  switch (true) {
    case window.width > 992:
      colorGrid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        columnGap: "32px",
      };
      break;
    case window.width > 768:
      colorGrid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "32px",
      };
      break;
    case window.width > 576:
      colorGrid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "24px",
      };
      break;
    default:
      colorGrid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "16px",
      };
      break;
  }

  return (
    <>
      <Container>
        <Font type='legend' color={theme.legend}>
          Spacings
        </Font>
        {/* Invisible one */}
        <Spacer font height={8} />

        {/* List of visible ones */}
        <Spacer show height={8} />
        {spacer}
        <Spacer show height={16} />
        {spacer}
        <Spacer show height={24} />
        {spacer}
        <Spacer show height={32} />
        {spacer}
        <Spacer show height={40} />
        {spacer}
        <Spacer show height={64} />
        {spacer}
        <Spacer show height={80} />
        {spacer}
        <Spacer show height={104} />
        {spacer}
        <Spacer show height={128} />
        {spacer}
        <Spacer show height={184} />

        {/* New section */}
        <Spacer height={32} />
        <Font type='legend' color={theme.legend}>
          Colors
        </Font>
        <Spacer height={24} />
        <div style={colorGrid}>
          <ColorSwatch
            color={theme.text}
            name='Text'
            value={darkMode.value ? "#E9E9E9" : "#191919"}
          />
          <ColorSwatch
            color={theme.legend}
            name='Legend'
            value={darkMode.value ? "#878888" : "#757575"}
          />
          <ColorSwatch
            color={theme.hover}
            name='Hover'
            value={darkMode.value ? "#414141" : "#E7E7E7"}
          />
          <ColorSwatch
            color={theme.grey}
            name='Grey'
            value={darkMode.value ? "#1C1C1C" : "#F3F3F3"}
          />
          <ColorSwatch
            color={theme.main}
            name='Main'
            value={darkMode.value ? "#6946BA" : "#00BAFF"}
          />
          <ColorSwatch
            color={theme.secondary}
            name='Secondary'
            value={darkMode.value ? "#500BF1" : "#6A78FF"}
          />
          <ColorSwatch
            color={theme.gradient}
            gradient
            name='Gradient'
            value='linear-gradient(180deg, $Secondary -30%, $Main 130%);'
          />
          <ColorSwatch
            color={theme.tint}
            name='Tint'
            value={darkMode.value ? "#2C292E" : "#F4F6F9"}
          />
        </div>
        <Spacer height={32} />
        <Tooltip value='This is a tooltip test!!' />
      </Container>
    </>
  );
};

export default UtilsSection;
