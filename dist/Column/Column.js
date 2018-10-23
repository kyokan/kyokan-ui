import React from 'react';
import { Col as RGSColumn } from 'react-grid-system';

/**
* A wrapper around React Grid System's Column (https://jsxmachina.github.io/react-grid-system/#col).
*/
const Column = props => {
  return React.createElement(RGSColumn, props);
};

/** @component */
export default Column;