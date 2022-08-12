import React from "react";

import { StyledCell } from "./StyledCell";
import { TETROMINOS } from "../../utils/tetrominos";

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

export default Cell;
