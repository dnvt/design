import React from "react";
import { useTheme } from "react-jss";
import Container from "../../Components/Containers/Container";
import Vignettes from "../../Components/Vignettes/Vignettes";
import Spacer from "../../Utils/Spacer/Spacer";

export const ImageSection = () => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Spacer height={24} />
      </Container>
      <Vignettes
        big
        alt='This is a fantastic image for you mon ami'
        background={theme.grey}
      />
      <Container>
        <Spacer height={32} />
      </Container>
      <Vignettes
        alt='This is a fantastic image for you mon ami'
        background={theme.grey}
      />
      <Container>
        <Spacer height={32} />
      </Container>
      <Vignettes background={theme.grey} />
    </>
  );
};
