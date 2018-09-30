import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An input field with a joined submit button.
*/
const InputButton = props => {
  const StyledInputButton = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledInputButton, null);
};

InputButton.propTypes = {
  /** The button text */
  buttonText: PropTypes.string.isRequired,

  /** A callback function to fire on button click */
  onClick: PropTypes.string
};

/** @component */
export default InputButton;