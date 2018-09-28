import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TextArea = (props) => {
  const StyledTextArea = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTextArea
      onKeyUp=""
      placeholder=""
    >
      
    </StyledTextArea>
  );
};

TextArea.propTypes = {
  /** A callback function to fire when user is typing */
  onKeyUp: PropTypes.any,

  /** A string of placeholder text */
  placeholder: PropTypes.any,
};

/** @component */
export default TextArea;
