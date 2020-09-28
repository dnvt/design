import React from "react";
import { useTheme } from "react-jss";
import Container from "../../Components/Containers/Container";
import Vignettes from "../../Components/Vignettes/Vignettes";
import Spacer from "../../Utils/Spacer/Spacer";

export const ImageSection = (props) => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Spacer height={24} />
      </Container>
      <Vignettes
        big
        alt={"This is a fantastic image for you mon ami"}
        background={theme.grey}
      />
      <Container>
        {/* <SpacingFortyHalf visibility={visibility} />

        <LegendImage
          src={"./img/USMobile-02"}
          visibility={visibility}
          background={colors.usmob}
        />
        <SpacingFortyHalf visibility={visibility} />
        <LegendImage
          src={"./img/USMobile-02"}
          alt={"This is a fantastic image for you mon ami"}
          visibility={visibility}
          background={colors.usmob}
        /> */}
      </Container>
    </>
  );
};
