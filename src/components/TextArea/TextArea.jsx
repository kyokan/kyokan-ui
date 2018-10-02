import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A textarea for the user to input text
*/
const TextArea = (props) => {
  const StyledWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
  `;

  const StyledTextArea = styled.textarea`
    font-family : ${ (props) => props.theme.textInputFontFamily };
    font-weight : ${ (props) => props.theme.textInputFontWeight };
    font-size   : ${ (props) => props.theme.textInputFontSize };
    color       : ${ (props) => props.theme.textInputColor };

    border-color  : ${ (props) => props.theme.textInputBorderColor };
    border-width  : ${ (props) => props.theme.textInputBorderWidth };
    border-style  : ${ (props) => props.theme.textInputBorderStyle };
    border-radius : ${ (props) => props.theme.textInputBorderRadius };

    padding-top    : ${ (props) => props.theme.textInputPaddingTop };
    padding-right  : ${ (props) => props.theme.textInputPaddingRight };
    padding-bottom : ${ (props) => props.theme.textInputPaddingBottom };
    padding-left   : ${ (props) => props.theme.textInputPaddingLeft };

    outline : none;
    resize: none;
    flex: 1 0 auto;

    &:focus {
      border-color : ${ (props) => props.theme.textInputBorderColorActive };
    }

    &::placeholder {
      color       : ${ (props) => props.theme.textInputPlaceholderColor };
      font-weight : ${ (props) => props.theme.textInputPlaceholderFontWeight };
    }
  `;

  return (
    <StyledWrapper>
      <StyledTextArea>
        {props.children}
      </StyledTextArea>
    </StyledWrapper>
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
