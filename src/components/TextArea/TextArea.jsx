import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A textarea for the user to input text
*/
const TextArea = (props) => {
  const StyledTextArea = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledTextArea>

    </StyledTextArea>
  );
};

TextArea.propTypes = {
  /** A callback function to fire when user is typing */
  onKeyUp: PropTypes.func,

  /** Placeholder text */
  placeholder: PropTypes.string,

  /** Label text for the TextArea */
  label: PropTypes.string,
};

/** @component */
export default TextArea;
