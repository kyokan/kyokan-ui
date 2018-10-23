import React from 'react';
import { Visible as RGSVisible } from 'react-grid-system';

/**
* A wrapper around React Grid System's Visible utility(https://jsxmachina.github.io/react-grid-system/#visible).
*/
const Visible = props => {
  return React.createElement(RGSVisible, props);
};

/** @component */
export default Visible;