import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A textarea for the user to input text
*/
const TextArea = props => {
  const StyledTextArea = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledTextArea, null);
};

TextArea.propTypes = {
  /** A callback function to fire when user is typing */
  onKeyUp: PropTypes.func,

  /** A string of placeholder text */
  placeholder: PropTypes.string
};

/** @component */
export default TextArea;