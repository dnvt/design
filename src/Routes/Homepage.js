import React, { useEffect } from "react";

// import HomepageStyle from "./Homepage-style";
import Spacer from "../Utils/Spacer/Spacer";
import FontHero from "../Components/Hero/FontHero";
import USMWork from "../Sections/Homepage/USMWork";
import Introduction from "../Sections/Homepage/Introduction";
import SelectedWork from "../Sections/Homepage/SelectedWork";
import PlayGround from "../Sections/Homepage/PlayGround";
import About from "../Sections/Homepage/About";
import PrivateWork from "../Sections/Homepage/PrivateWork";
import { useMainColor } from "../Hooks/useMainColor";
import { useTheme } from "react-jss";

const Homepage = () => {
  const theme = useTheme();
  const [color, setColor] = useMainColor();

  useEffect(() => {
    setColor(theme.main);
    console.log(color);
  }, [setColor, color, theme.main]);

  return (
    <>
      <Spacer c height={104} />
      <Spacer c height={184} />
      <div style={{ position: "relative" }}>
        <FontHero value='François' />
      </div>
      <Introduction />
      <Spacer c height={184} />
      <USMWork />
      <Spacer c height={104} />
      <PrivateWork />
      <Spacer c height={104} />
      <SelectedWork />
      <Spacer c height={184} />
      <div style={{ position: "relative" }}>
        <FontHero value='Yeaaah!' />
      </div>
      <PlayGround />
      <div style={{ position: "relative" }}>
        <FontHero value='dnvt.me' />
      </div>
      <Spacer c height={184} />
      <About />
    </>
  );
};

export default Homepage;

// import Container from "../Components/Containers/Container";
// import { animated, useSpring } from "react-spring";
// import { useHover } from "react-use-gesture";

// function DragAndMouseDown() {
//   const [{ color }, set] = useSpring(() => ({ color: "white" }));
//   const bind = useHover(
//     ({ hovering }) => set({ color: hovering ? "green" : "white" })
//   );

//   return (
//     <Container>
//       <animated.div {...bind()} style={{ padding: "120px 0", color }}>
//         hello
//       </animated.div>
//     </Container>
//   );
// }
