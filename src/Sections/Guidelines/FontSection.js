import React from "react";
import { useTheme } from "react-jss";

import Font from "../../Utils/Font/Font";
import Spacer from "../../Utils/Spacer/Spacer";
import Container from "../../Components/Containers/Container";
import { Description } from "./Description";
import FontHero from "../../Components/Hero/FontHero";
import { useWindowSize } from "../../Hooks/useWindowSize";

const FontSection = () => {
  const theme = useTheme();
  const spacer = <Spacer height={40} />;
  const window = useWindowSize();

  return (
    <>
      {window.width > 768 && (
        <>
          <Container>{spacer}</Container>
          <div
            style={{
              position: "relative",
              height: "800px",
              padding: "120px -80px",
            }}
          >
            <FontHero value='Hello World!' />
          </div>
        </>
      )}
      <Container>
        <Spacer height={64} />
        <Font type='h1'>
          H1 Heading. <br /> This is my H1 and I tried to make it a long long
          long ass title. Is this too long?
        </Font>
        <Description
          width={window.width}
          color={theme.legend}
          valueLarge={DESC.large.h1}
          valueMedium={DESC.medium.h1}
          valueSmall={DESC.small.h1}
        />
        {spacer}
        <Font type='h2'>H2 Section</Font>
        <Description
          width={window.width}
          color={theme.legend}
          valueLarge={DESC.large.h2}
          valueMedium={DESC.medium.h2}
          valueSmall={DESC.small.h2}
        />
        {spacer}
        <Font type='h3'>H3 Title. This is a long long long ass title.</Font>
        <Description
          width={window.width}
          color={theme.legend}
          valueLarge={DESC.large.h3}
          valueMedium={DESC.medium.h3}
          valueSmall={DESC.small.h3}
        />
        {spacer}
        <Font type='h4'>H4 Subtitle. This is a long long long ass title.</Font>
        <Description
          width={window.width}
          color={theme.legend}
          valueLarge={DESC.large.h4}
          valueMedium={DESC.medium.h4}
          valueSmall={DESC.small.h4}
        />
        {spacer}
        <Font type='h5' color={theme.main}>
          H5 Tags. This is a long long long tag.
        </Font>
        <Description
          width={window.width}
          color={theme.legend}
          valueLarge={DESC.large.h5}
          valueMedium={DESC.medium.h5}
          valueSmall={DESC.small.h5}
        />
        {spacer}
        <Font type='text'>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Donec sed odio dui. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec id elit non mi porta gravida
          at eget metus. Aenean lacinia bibendum nulla sed consectetur. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo,
          tortor mauris condimentum nibh, ut fermentum massa justo sit amet
          risus.
        </Font>
        <Font type='text'>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
          elit non mi porta gravida at eget metus. Donec ullamcorper nulla non
          metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          Cras mattis consectetur purus sit amet fermentum. Sed posuere
          consectetur est at lobortis.
        </Font>
        <Font type='text'>
          Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
          amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at
          eget metus. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
          amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus
          mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae elit libero, a pharetra augue. Integer posuere erat
          a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non
          commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit. Donec id elit non mi porta gravida at eget metus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum
          nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit
          amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta
          sem malesuada magna mollis euismod.
        </Font>
        <Description
          width={window.width}
          color={theme.legend}
          valueLarge={DESC.large.text}
          valueMedium={DESC.medium.text}
          valueSmall={DESC.small.text}
        />
      </Container>
    </>
  );
};

const DESC = {
  large: {
    h1: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h2: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h3: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h4: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h5: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    text: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
  medium: {
    h1: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h2: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h3: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h4: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h5: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    text: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
  small: {
    h1: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h2: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h3: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h4: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h5: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    text: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
};

export default FontSection;
