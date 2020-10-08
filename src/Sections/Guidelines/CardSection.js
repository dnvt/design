import React from "react";
import { useTheme } from "react-jss";
import Card from "../../Components/Cards/Card";
import Spacer from "../../Utils/Spacer/Spacer";
import SpacerFortyHalf from "../../Utils/Spacer/Variations/SpacerFortyHalf";

const CardSection = () => {
  const theme = useTheme();

  return (
    <>
      <SpacerFortyHalf />
      <Card
        container
        status='construction'
        titleColor={theme.text}
        tagValue='Programming'
        tagsColor={theme.main}
        // src={"./img/USMobile-02"}
        background={theme.grey}
        backgroundHover={theme.hover}
        alt
        path='/'
      >
        Test of this title
      </Card>
      <Spacer container height={32} />
      <Card
        container
        right
        status='stop'
        titleColor={theme.text}
        tagValue='Programming'
        tagsColor={theme.secondary}
        // src={"./img/USMobile-02"}
        background={theme.grey}
        backgroundHover={theme.hover}
        alt
        path='/'
      >
        Test of this title
      </Card>
    </>
  );
};

export default CardSection;
