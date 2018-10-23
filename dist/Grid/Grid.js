import React from 'react';
import { Container as RGSGrid } from 'react-grid-system';

/**
* A wrapper around React Grid System's Container (Grid) (https://jsxmachina.github.io/react-grid-system/#container).
*/
const Grid = props => {
  return React.createElement(RGSGrid, props);
};

/** @component */
export default Grid;