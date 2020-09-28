import React from "react";
import { useTheme } from "react-jss";

// import HomepageStyle from "./Homepage-style";
import Spacer from "../Utils/Spacer/Spacer";
import Font from "../Utils/Font/Font";
import Container from "../Components/Containers/Container";

const Homepage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Spacer height={144} />
      <Font type='h1'>
        Hello there
        <br />
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Donec sed odio dui. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at
        eget metus. Aenean lacinia bibendum nulla sed consectetur. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo
        odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
        porta gravida at eget metus. Donec ullamcorper nulla non metus auctor
        fringilla. Nulla vitae elit libero, a pharetra augue. Cras mattis
        consectetur purus sit amet fermentum. Sed posuere consectetur est at
        lobortis.
      </Font>
      <Font type='h2'>This is a title</Font>
      <Font type='h3'>This is my h3</Font>
      <Font type='legend'> This is the legend! Mouahaha</Font>
      <Font type='h4'>And this is yours, truly... h4 mother fucker!</Font>
      <Font type='h5' color={theme.main}>
        I didn't rememberered I had a h5!
      </Font>
      <Font type='text'>
        Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
        amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at
        eget metus. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Maecenas faucibus mollis interdum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
        elit libero, a pharetra augue. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi
        erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non
        mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas
        sed diam eget risus varius blandit sit amet non magna. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus. Etiam porta sem malesuada magna mollis
        euismod.
      </Font>
      <Font type='text'>
        Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
        amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at
        eget metus. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Maecenas faucibus mollis interdum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
        elit libero, a pharetra augue. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi
        erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non
        mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas
        sed diam eget risus varius blandit sit amet non magna. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus. Etiam porta sem malesuada magna mollis
        euismod.
        <br />
        Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
        amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at
        eget metus. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo,
        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Maecenas faucibus mollis interdum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
        elit libero, a pharetra augue. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi
        erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non
        mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas
        sed diam eget risus varius blandit sit amet non magna. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus. Etiam porta sem malesuada magna mollis
        euismod.
      </Font>
      <Font type='legend' color={theme.main}>
        This is the legend! Mouahaha
      </Font>
      <Font type='menu'>Menu</Font>
    </Container>
  );
};

export default Homepage;
