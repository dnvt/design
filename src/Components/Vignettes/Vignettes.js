import React from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";

import VignettesStyle from "./Vignettes-style";
import Image from "../../Utils/Image/Image";
import Spacer from "../../Utils/Spacer/Spacer";
import Font from "../../Utils/Font/Font";
import Container from "../Containers/Container";

// TODO: Continue cleaning this shit

const Vignettes = (props) => {
  // props.big = ?boolean;
  // props.src = string;
  // props.alt = string;

  const window = useWindowSize();
  const classes = VignettesStyle();

  const inner = (
    <>
      <div className={classes.Vignette}>
        {/* <div className={classes.ImageContainer}> */}
        <Image cl='vignette' src={props.src} alt={props.alt} />
        {/* </div> */}
      </div>
      {props.alt && (
        <>
          <Spacer height={window.width > 992 ? 16 : 8} />
          <Font type='legend'>{props.alt}</Font>
        </>
      )}
    </>
  );

  return props.big ? <>{inner}</> : <Container>{inner}</Container>;
};

// if (big) {
//   return (
//     <>
//       <div className={classes.fullImage}>
//         <Image
//           webp={src + ".webp"}
//           src={src + ".png"}
//           alt={alt}
//           className={classes.legendImage}
//           style={{ background: background }}
//         />
//         {/* <Image cl='mobile' src={props.src} alt={props.alt} /> */}
//       </div>
//       <Container>
//         {alt && (
//           <Spacer
//             value={window.width > 992 ? 16 : 8}
//             height={window.width > 992 ? space[2] : space[1]}
//           />
//         )}
//         {alt && <Font type='legend' color={colors.b60} value='alt' />}
//       </Container>
//     </>
//   );
// }

// return (
//   <>
//     <div className={classes.fullImage}>
//       <Image
//         webp={src + ".webp"}
//         src={src + ".png"}
//         alt={alt}
//         className={classes.legendImage}
//         style={{ background: background }}
//       />
//     </div>
//     {alt && (
//       <Spacer
//         width='100%'
//         visibility={visibility}
//         value={window.width > 992 ? 16 : 8}
//         height={width > 992 ? space[2] : space[1]}
//       />
//     )}
//     {alt && <Font type='legend' color={colors.b60} value='alt' />}
//   </>
// );

export default Vignettes;
