import React from "react";
import Font from "../../Utils/Font/Font";

const ParagraphModule = (props) => {
  return (
    <Font key={props.value} type='text'>
      {props.paragraph}
    </Font>
  );
};

export default ParagraphModule
