import React from "react"
import Section from "../Sections/Guidelines/Section"
import FontSection from "../Sections/Guidelines/FontSection"
import NavigationSection from "../Sections/Guidelines/NavigationSection"
import UtilsSection from "../Sections/Guidelines/UtilsSection"
import { DeviceSection } from "../Sections/Guidelines/DeviceSection"
import { ImageSection } from "../Sections/Guidelines/ImageSection"
import CardSection from "../Sections/Guidelines/CardSection"

const Guidelines = ({ location }) => {
  return (
    <>
      <Section valueTitle='Dnvt Guidelines' value='Font Section' />
      <FontSection location={location} />
      <Section value='Navigation Section' />
      <NavigationSection />
      <Section value=' Utility Section' />
      <UtilsSection />
      <Section value=' Device Section' />
      <DeviceSection />
      <Section value=' Image Section' />
      <ImageSection />
      <Section value=' Card Section' />
      <CardSection />
    </>
  )
}

export default Guidelines
