import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A generic component that is used when there is header and toggleable content.
*/
const Dropdown = props => {
  const StyledDropdown = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledDropdown,
    null,
    props.children
  );
};

Dropdown.propTypes = {
  /** Content to show in the header */
  header: PropTypes.any,

  /** Content to show in the dropdown */
  children: PropTypes.any,

  /** Placeholder text */
  placeholder: PropTypes.string,

  /** Fired on dropdown open/close */
  onChange: PropTypes.func
};

/** @component */
export default Dropdown;