import React from "react";
import Vignettes from "../../../Components/Vignettes/Vignettes";
import SpacerFortyHalf from "../../../Utils/Spacer/Variations/SpacerFortyHalf";

const ListofImages = (props) => {
  const rows = props.images.map(ModuleImage);
  return (
    <>
      <SpacerFortyHalf />
      {rows}
    </>
  );
};

const ModuleImage = (props) => {
  return (
    <div key={props.value}>
      <SpacerFortyHalf />
      <Vignettes src={props.src} alt={props.alt} />
    </div>
  );
};

export default ListofImages;
