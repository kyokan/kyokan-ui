import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A dropdown to allow the user to select multiple options from a set of options.
*/
const MultiSelect = props => {
  const StyledMultiSelect = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledMultiSelect, null);
};

MultiSelect.propTypes = {
  /** An array of objects which have the following keys: 'key', 'displayName', and 'selected'. */
  options: PropTypes.array.isRequired,

  /** Whether or not the select is open */
  open: PropTypes.bool,

  /** The text to be displayed in closed select */
  placeholder: PropTypes.string,

  /** Fired on multiselect option change */
  onChange: PropTypes.func
};

/** @component */
export default MultiSelect;