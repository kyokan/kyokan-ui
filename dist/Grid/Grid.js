import React from 'react';
import PropTypes from 'prop-types';

import { Grid as RFGrid } from 'react-flexbox-grid';

/**
* A layout grid component (currently a wrapper around https://github.com/roylee0704/react-flexbox-grid/blob/master/src/components/Grid.js).
*
* It is made up of 12 columns.
*/
const Grid = props => {
  return React.createElement(
    RFGrid,
    {
      fluid: props.fluid
    },
    props.children
  );
};

Grid.defaultProps = {
  fluid: true
};

Grid.propTypes = {
  /** Rows that you wish to compose */
  children: PropTypes.node.isRequired,

  /** Whether or not the grid is fluid; defaults to true to prevent horizontal overflow issues */
  fluid: PropTypes.bool,

  /** A classname to add to the element */
  className: PropTypes.string,

  /** The tagname that you wish the component to render */
  tagName: PropTypes.string
};

/** @component */
export default Grid;