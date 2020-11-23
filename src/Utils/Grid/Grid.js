import React, { memo } from "react";

import { useGridVisibility } from "../../Hooks/useGridVisibility";

import Vertical from "./Vertical";
import Horizontal from "./Horizontal";
import WindowSizeDisplay from "../WindowSizeDisplay/WindowSizeDisplay";

// import GridStyle from "./Grid-style";

const Grid = (props) => {
  const [visibility] = useGridVisibility();

  let grid = null;
  if (visibility)
    grid = (
      <>
        <Vertical />
        <Horizontal />
      </>
    );

  return (
    <div>
      {grid}
      <WindowSizeDisplay />
      {props.children}
    </div>
  );
};

export default memo(Grid);
