import React from 'react';
import PropTypes from 'prop-types';

import { Grid as RFGrid } from 'react-flexbox-grid';

/**
* A layout grid component (currently a wrapper around https://github.com/roylee0704/react-flexbox-grid).
*/
const Grid = (props) => {
  return (
    <RFGrid
      fluid={props.fluid}
    >
      {props.children}
    </RFGrid>
  );
};

Grid.defaultProps = {
  fluid: true,
}

Grid.propTypes = {
  /** Rows that you wish to compose */
  children: PropTypes.any.isRequired,

  /** Whether or not the grid is fluid; defaults to true to prevent horizontal overflow issues */
  fluid: PropTypes.bool,
};

/** @component */
export default Grid;
