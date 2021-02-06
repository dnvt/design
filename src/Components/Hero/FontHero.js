import React, { memo } from "react"
import Font from "../../Utils/Font/Font"
import HeroStyle from "./Hero-style"
import { useWindowSize } from "../../Hooks/useWindowSize"

import Hero from "./Hero"

const FontHero = (props) => {
  const classes = HeroStyle()

  const window = useWindowSize()

  if (window.width > 768 && props.animate) {
    return <Hero value={props.value} bottom={props.bottom} />
  }

  return (
    <div className={classes.Fontimation} style={{ zIndex: "-1" }}>
      <Font type='hero'>{props.value}</Font>
    </div>
  )
}

export default memo(FontHero)
