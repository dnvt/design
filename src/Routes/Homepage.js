import React from "react";
import { useTheme } from "react-jss";

// import HomepageStyle from "./Homepage-style";
import Spacer from "../Utils/Spacer/Spacer";
import Font from "../Utils/Font/Font";
import Container from "../Components/Containers/Container";
import ExternalLink from "../UI/Links/ExternalLink/ExternalLink";
import Verticaler from "../Utils/Spacer/Variations/Verticaler";
import FontHero from "../Components/Hero/FontHero";
import MenuLink from "../UI/Links/MenuLink/MenuLink";

const Column = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        columnGap: "32px",
      }}
    >
      {props.children}
    </div>
  );
};

const Introduction = () => {
  const theme = useTheme();
  return (
    <Container style={{ marginTop: "-160px" }}>
      <Font type='h1'>
        Digital designer based in New York – currently redefining modern video
        workflow at Frame.io
      </Font>
      <Spacer height={40} />
      <Column>
        <Font type='text'>
          Product designer and creative director able to provide strong
          leadership on the development of product designs, marketing campaigns,
          user interfaces, and motion design.
        </Font>
        <Verticaler width='352px' />
      </Column>
      <ExternalLink path='/' color={theme.text} value='Get in touch' />
    </Container>
  );
};

const Work = () => {
  const theme = useTheme();
  return (
    <Container>
      <Font type='h2'>Work</Font>
      <Spacer height={40} />
      <Column>
        <Font type='h3'>US Mobile, cellular plans for everybody.</Font>
        <Verticaler width='544px' />
      </Column>
      <Spacer height={24} />
      <Column>
        <Font type='text'>
          Lead all creative direction organizationally. Develop the product
          strategy, set product design requirements and create priority maps
          based on end-user data. Drive integration efforts with Verizon’s
          carrier platform while maintaining continued service integration with
          T-Mobile.
        </Font>
        <Font type='text' width='544px'>
          Lead to the expansion of the organization from 15,000 customers to
          more than 60,000 users, which occurred primarily through word of mouth
          from product experience.
        </Font>
      </Column>
      <div style={{ display: "flex" }}>
        <MenuLink
          value='François Denavaut'
          color={theme.text}
          hover={theme.main}
        />
        <ExternalLink path='/' color={theme.text} value='Dribbble' />
      </div>
    </Container>
  );
};

const Homepage = () => {
  return (
    <>
      <Spacer container height={32} />
      <FontHero value='François' />
      <Introduction />
      <Spacer container height={184} />
      <Work />
    </>
  );

  // return (
  //   <Container>
  //     <Spacer height={144} />
  //     <Font type='h1'>
  //       Hello there
  //       <br />
  //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
  //       lacinia odio sem nec elit. Donec sed odio dui. Lorem ipsum dolor sit
  //       amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at
  //       eget metus. Aenean lacinia bibendum nulla sed consectetur. Duis mollis,
  //       est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
  //       sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris
  //       condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo
  //       odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
  //       porta gravida at eget metus. Donec ullamcorper nulla non metus auctor
  //       fringilla. Nulla vitae elit libero, a pharetra augue. Cras mattis
  //       consectetur purus sit amet fermentum. Sed posuere consectetur est at
  //       lobortis.
  //     </Font>
  //     <Font type='h2'>This is a title</Font>
  //     <Font type='h3'>This is my h3</Font>
  //     <Font type='legend'> This is the legend! Mouahaha</Font>
  //     <Font type='h4'>And this is yours, truly... h4 mother fucker!</Font>
  //     <Font type='h5' color={theme.main}>
  //       I didn't rememberered I had a h5!
  //     </Font>
  //     <Font type='text'>
  //       Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
  //       commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
  //       amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at
  //       eget metus. Praesent commodo cursus magna, vel scelerisque nisl
  //       consectetur et. Cum sociis natoque penatibus et magnis dis parturient
  //       montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo,
  //       tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
  //       Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
  //       ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac
  //       facilisis in, egestas eget quam. Maecenas faucibus mollis interdum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
  //       elit libero, a pharetra augue. Integer posuere erat a ante venenatis
  //       dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi
  //       erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non
  //       mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur
  //       adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas
  //       sed diam eget risus varius blandit sit amet non magna. Fusce dapibus,
  //       tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
  //       massa justo sit amet risus. Etiam porta sem malesuada magna mollis
  //       euismod.
  //     </Font>
  //     <Font type='text'>
  //       Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
  //       commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
  //       amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at
  //       eget metus. Praesent commodo cursus magna, vel scelerisque nisl
  //       consectetur et. Cum sociis natoque penatibus et magnis dis parturient
  //       montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo,
  //       tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
  //       Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
  //       ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac
  //       facilisis in, egestas eget quam. Maecenas faucibus mollis interdum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
  //       elit libero, a pharetra augue. Integer posuere erat a ante venenatis
  //       dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi
  //       erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non
  //       mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur
  //       adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas
  //       sed diam eget risus varius blandit sit amet non magna. Fusce dapibus,
  //       tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
  //       massa justo sit amet risus. Etiam porta sem malesuada magna mollis
  //       euismod.
  //       <br />
  //       Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
  //       commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
  //       amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at
  //       eget metus. Praesent commodo cursus magna, vel scelerisque nisl
  //       consectetur et. Cum sociis natoque penatibus et magnis dis parturient
  //       montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo,
  //       tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
  //       Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
  //       ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac
  //       facilisis in, egestas eget quam. Maecenas faucibus mollis interdum.
  //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
  //       elit libero, a pharetra augue. Integer posuere erat a ante venenatis
  //       dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi
  //       erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non
  //       mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur
  //       adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas
  //       sed diam eget risus varius blandit sit amet non magna. Fusce dapibus,
  //       tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
  //       massa justo sit amet risus. Etiam porta sem malesuada magna mollis
  //       euismod.
  //     </Font>
  //     <Font type='legend' color={theme.main}>
  //       This is the legend! Mouahaha
  //     </Font>
  //     <Font type='menu'>Menu</Font>
  //   </Container>
  // );
};

export default Homepage;
