import React, { useEffect } from "react"
import { parse } from "query-string"
// import HomepageStyle from "./Homepage-style";
import Spacer from "../Utils/Spacer/Spacer"
import FontHero from "../Components/Hero/FontHero"
import USMWork from "../Sections/Homepage/USMWork"
import Introduction from "../Sections/Homepage/Introduction"
import SelectedWork from "../Sections/Homepage/SelectedWork"
import PlayGround from "../Sections/Homepage/PlayGround"
import About from "../Sections/Homepage/About"
import PrivateWork from "../Sections/Homepage/PrivateWork"
import { useMainColor } from "../Hooks/useMainColor"
import { useTheme } from "react-jss"
import { useWindowSize } from "../Hooks/useWindowSize"

const Homepage = ({ location }) => {
  const theme = useTheme()
  const window = useWindowSize()
  const [color, setColor] = useMainColor()
  const animate = parse(location.search).fontAnimation

  let spacer = <Spacer c height={window.width > 768 ? 184 : 40} />

  useEffect(() => {
    setColor(theme.main)
    console.log(color)
  }, [setColor, color, theme.main])

  return (
    <>
      <Spacer c height={104} />
      <Spacer c height={window.width > 768 ? 184 : null} />
      <div style={{ position: "relative" }}>
        <FontHero animate={animate} value='François' />
      </div>
      <Introduction />
      {spacer}
      <USMWork />
      <Spacer c height={104} />
      <PrivateWork />
      <Spacer c height={104} />
      <SelectedWork />
      {spacer}
      <div style={{ position: "relative" }}>
        <FontHero animate={animate} value='Yeaaah!' />
      </div>
      <PlayGround />
      <div style={{ position: "relative" }}>
        <FontHero animate value='dnvt.me' />
      </div>
      {spacer}
      <About />
    </>
  )
}

export default Homepage

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
