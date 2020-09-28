import React from "react";
import SpacerStyle from "./Spacer-style";
import { useGridVisibility } from "../../Hooks/useGridVisibility";
import { useTheme } from "react-jss";

const Spacer = (props) => {
  const theme = useTheme();
  const [visibility] = useGridVisibility();
  const classes = SpacerStyle({ ...props, theme });

  let valueNumber = <>{props.font ? null : props.height}</>;
  let value = <div className={classes.bigNumber}>{valueNumber}</div>;

  switch (true) {
    case props.height > 32:
      value = (
        <div className={classes.bigNumber}>
          {props.font ? null : props.height}
        </div>
      );
      break;
    case props.height > 24:
      value = <div className={classes.midNumber}>{valueNumber}</div>;
      break;
    case props.height > 16:
      value = <div className={classes.number}>{valueNumber}</div>;
      break;
    case props.height > 8:
      value = <div className={classes.smallNumber}>{valueNumber}</div>;
      break;

    default:
      value = null;
      break;
  }

  let spacer = (
    <div
      style={{
        width: props.width,
        height: props.height,
        background: "transparent",
      }}
      className={classes.hidding}
    ></div>
  );

  if (visibility || props.show) {
    spacer = (
      <div
        style={{
          width: props.width,
          height: props.height,
          background: props.bg,
        }}
        className={props.font ? classes.fontSpacer : classes.spacer}
      >
        {value}
      </div>
    );
  }

  return <>{spacer}</>;
};

export default Spacer;

// export function SpacingFortyHalf({ visibility }) {
//   const { width } = useWindowDimensions();

//   if (width > "992") {
//     return (
//       <>
//         <Container>
//           <Spacing
//             visibility={visibility}
//             value='40'
//             height={space[5]}
//             width='100%'
//           />
//         </Container>
//       </>
//     );
//   }
//   if (width > "768") {
//     return (
//       <>
//         <Container>
//           <Spacing
//             visibility={visibility}
//             value='32'
//             height={space[4]}
//             width='100%'
//           />
//         </Container>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Container>
//           <Spacing
//             visibility={visibility}
//             value='24'
//             height={space[3]}
//             width='100%'
//           />
//         </Container>
//       </>
//     );
//   }
// }

// export function SpacingEightyHalf({ visibility }) {
//   const { width } = useWindowDimensions();

//   if (width > "1360") {
//     return (
//       <>
//         <Container>
//           <Spacing
//             visibility={visibility}
//             value='80'
//             height={space[7]}
//             width='100%'
//           />
//         </Container>
//       </>
//     );
//   }
//   if (width > "992") {
//     return (
//       <>
//         <Container>
//           <Spacing
//             visibility={visibility}
//             value='64'
//             height={space[6]}
//             width='100%'
//           />
//         </Container>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Container>
//           <Spacing
//             visibility={visibility}
//             value='40'
//             height={space[5]}
//             width='100%'
//           />
//         </Container>
//       </>
//     );
//   }
// }

// export function SpacingHundredEighty({ visibility }) {
//   const { width } = useWindowDimensions();

//   if (width > "768") {
//     return (
//       <>
//         <Container>
//           <Spacing
//             visibility={visibility}
//             value='104'
//             height={space[8]}
//             width='100%'
//           />
//         </Container>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Container>
//           <Spacing
//             visibility={visibility}
//             value='64'
//             height={space[6]}
//             width='100%'
//           />
//         </Container>
//       </>
//     );
//   }
// }
