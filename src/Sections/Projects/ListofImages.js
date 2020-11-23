import React from "react";
import Container from "../../Components/Containers/Container";
import Vignettes from "../../Components/Vignettes/Vignettes";
import SpacerFortyHalf from "../../Utils/Spacer/Variations/SpacerFortyHalf";

const ListofImages = (props) => {
  const rows = props.images.map(ModuleImage);
  return (
    <Container>
      <SpacerFortyHalf />
      {rows}
    </Container>
  );
};

const ModuleImage = (props) => {
  return (
    <>
      <SpacerFortyHalf />
      <Vignettes src={props.src} alt={props.alt} />
    </>
  );
};

// const ListofImages = () => {
//   return (
//     <Container>
//       <SpacerEightyHalf />
//       <Vignettes src={[]} alt='hello' />
//       <SpacerFortyHalf />
//       <Vignettes src={[]} />
//       <SpacerFortyHalf />
//       <Vignettes src={[]} />
//       <SpacerFortyHalf />
//       <Vignettes src={[]} alt='hello' />
//     </Container>
//   );
// };

export default ListofImages;
