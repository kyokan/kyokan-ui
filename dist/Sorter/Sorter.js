import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A dropdown that allows the user to sort a list by a selected option.
*/
const Sorter = props => {
  const StyledSorter = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledSorter, null);
};

Sorter.propTypes = {
  /** Text that signals sorting (shown before the selected option) */
  prefix: PropTypes.string.isRequired,

  /** An array of strings containing sort options */
  sortOptions: PropTypes.array.isRequired,

  /** Fired on sort selection change */
  onChange: PropTypes.func
};

/** @component */
export default Sorter;