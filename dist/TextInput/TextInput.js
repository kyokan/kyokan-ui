import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TextInput = props => {
  const StyledTextInput = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledTextInput, {
    value: '',
    label: '',
    placeholder: ''
  });
};

TextInput.propTypes = {
  /** The string of text to display in the text input field */
  value: PropTypes.any,

  /** The text to display above a text input */
  label: PropTypes.any,

  /** A string of placeholder text */
  placeholder: PropTypes.any
};

/** @component */
export default TextInput;