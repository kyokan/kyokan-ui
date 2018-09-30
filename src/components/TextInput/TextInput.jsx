import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A text input field.
*/
const TextInput = (props) => {
  const StyledTextInput = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledTextInput>
      
    </StyledTextInput>
  );
};

TextInput.propTypes = {
  /** Text to display in the text input field */
  value: PropTypes.string,

  /** The text to display as the label for the text input */
  label: PropTypes.string,

  /** Placeholder text */
  placeholder: PropTypes.string,

  /** Fired on input value change */
  onChange: PropTypes.func,
};

/** @component */
export default TextInput;
