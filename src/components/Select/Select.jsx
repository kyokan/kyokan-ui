import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Select = (props) => {
  const StyledSelect = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledSelect
      isExpanded=""
      placeholder=""
    >
      {props.children}
    </StyledSelect>
  );
};

Select.propTypes = {
  /** The dropdown options to be displayed */
  children: PropTypes.any,

  /** A boolean which defaults to false for closed dropdown */
  isExpanded: PropTypes.any,

  /** The text to be displayed in closed Dropdown */
  placeholder: PropTypes.any,
};

/** @component */
export default Select;
