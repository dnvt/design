import React from "react";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Column from "../../Components/Containers/Columns/Column";
import GroupedCard from "../../Components/Cards/Layouts/GroupedCards";
import SpacerFortyHalf from "../../Utils/Spacer/Variations/SpacerFortyHalf";
import Card from "../../Components/Cards/Card";
import Container from "../../Components/Containers/Container";
import { useTheme } from "react-jss";

/// Images
import norsePng from "../../Assets/Images/Norse/Norse.png";
import norseWebp from "../../Assets/Images/Norse/Norse.webp";
import elasticPng from "../../Assets/Images/Elastic/Elastic.png";
import elasticWebp from "../../Assets/Images/Elastic/Elastic.webp";
import wastePng from "../../Assets/Images/Waste/Waste.png";
import wasteWebp from "../../Assets/Images/Waste/Waste.webp";
import kipfitPng from "../../Assets/Images/Kipfit/Kipfit.png";
import kipfitWebp from "../../Assets/Images/Kipfit/Kipfit.webp";
import mimiPng from "../../Assets/Images/Mimi/Mimi.png";
import mimiWebp from "../../Assets/Images/Mimi/Mimi.webp";

const SelectedWork = () => {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Font type='h4'>Selected</Font>
        <Column spacer third>
          <Font type='text'>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Sed posuere consectetur est at lobortis. Etiam porta sem
            malesuada magna mollis euismod.
          </Font>
        </Column>
        <Spacer height={40} />
      </Container>
      <GroupedCard
        width='100%'
        tag={{
          color: [theme.norse.text, theme.elastic.text],
          value: ["Branding - Illustrations", "Design - Webflow"],
        }}
        title={{
          color: [theme.text, theme.text],
          value: ["Norse Interiors", "Elastic Film"],
        }}
        background={{
          color: [theme.background, theme.grey],
          hover: [theme.hover, theme.hover],
        }}
        status={["loading", "loading"]}
        src={[
          [norsePng, norseWebp],
          [elasticPng, elasticWebp],
        ]}
        alt={[
          "Norse interieur manual",
          "Elastic movie who scared the hell out of me",
        ]}
      />
      <SpacerFortyHalf />
      <Card
        container
        status='construction'
        tagsColor={theme.waste.main}
        tagValue='Branding - Illustrations'
        titleColor={theme.text}
        src={[wastePng, wasteWebp]}
        background={theme.grey}
        backgroundHover={theme.hover}
        alt="Love your Waste Paris based startup"
        path='/'
      >
        Love your waste
      </Card>
      <SpacerFortyHalf />
      <GroupedCard
        left
        width='100%'
        tag={{
          color: [theme.kipfit.text, theme.mimi.text],
          value: [
            "Product Design - Motion design",
            "Illustration - Motion design - Product design",
          ],
        }}
        title={{
          color: [theme.text, theme.text],
          value: ["Kipfit", "Mimi Hearing Technology"],
        }}
        background={{
          color: [theme.background, theme.mimi.background],
          hover: [theme.hover, theme.mimi.hover],
        }}
        status={["loading", "loading"]}
        src={[
          [kipfitPng, kipfitWebp],
          [mimiPng, mimiWebp],
        ]}
        alt={["kiptfit keeps you fit!", "Mimi hearing illustrations"]}
      />
    </>
  );
};

export default SelectedWork;
