import React from 'react';
import { Row as RGSRow } from 'react-grid-system';

/**
* A wrapper around React Grid System's Row (https://jsxmachina.github.io/react-grid-system/#row).
*/
const Row = props => {
  return React.createElement(RGSRow, props);
};

/** @component */
export default Row;