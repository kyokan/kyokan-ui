import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const InputButton = (props) => {
  const StyledInputButton = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledInputButton
      buttonText=""
      onClick=""
    >

    </StyledInputButton>
  );
};

InputButton.propTypes = {
  /** A string of button text */
  buttonText: PropTypes.any,

  /** A callback function to fire on button click */
  onClick: PropTypes.any,
};

/** @component */
export default InputButton;
