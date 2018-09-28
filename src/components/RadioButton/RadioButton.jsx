import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const RadioButton = (props) => {
  const StyledRadioButton = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledRadioButton
      checked=""
    >
      
    </StyledRadioButton>
  );
};

RadioButton.propTypes = {
  /** A boolean representing the checked state of the radio button */
  checked: PropTypes.any,
};

/** @component */
export default RadioButton;
