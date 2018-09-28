import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Dropdown = (props) => {
  const StyledDropdown = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledDropdown
      header=""
      placeholder=""
    >
      {props.children}
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  /** Content to show in the header */
  header: PropTypes.any,

  /** Any content to show in the dropdown */
  children: PropTypes.any,

  /** A string of placeholder text */
  placeholder: PropTypes.any,
};

/** @component */
export default Dropdown;
