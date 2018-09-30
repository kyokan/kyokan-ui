import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A dropdown that allows a user to select one of many options.
*/
const Select = props => {
  const StyledSelect = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledSelect, null);
};

Select.propTypes = {
  /** An array of objects which have the following keys: 'key' and 'displayName' */
  options: PropTypes.array.isRequired,

  /** Whether or not the select is open */
  open: PropTypes.bool,

  /** The text to be displayed in closed select */
  placeholder: PropTypes.string,

  /** Fired on select option change */
  onChange: PropTypes.func
};

/** @component */
export default Select;