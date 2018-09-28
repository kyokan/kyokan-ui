import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Sorter = props => {
  const StyledSorter = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledSorter, {
    prefix: '',
    sortOptions: ''
  });
};

Sorter.propTypes = {
  /** The string of text that signals sorting */
  prefix: PropTypes.any,

  /** An array of strings containing sort options */
  sortOptions: PropTypes.any
};

/** @component */
export default Sorter;