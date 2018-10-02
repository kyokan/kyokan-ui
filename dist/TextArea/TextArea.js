import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A textarea for the user to input text
*/
const TextArea = props => {
  const StyledWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
  `;

  const StyledTextArea = styled.textarea`
    font-family : ${props => props.theme.textInputFontFamily};
    font-weight : ${props => props.theme.textInputFontWeight};
    font-size   : ${props => props.theme.textInputFontSize};
    color       : ${props => props.theme.textInputColor};

    border-color  : ${props => props.theme.textInputBorderColor};
    border-width  : ${props => props.theme.textInputBorderWidth};
    border-style  : ${props => props.theme.textInputBorderStyle};
    border-radius : ${props => props.theme.textInputBorderRadius};

    padding-top    : ${props => props.theme.textInputPaddingTop};
    padding-right  : ${props => props.theme.textInputPaddingRight};
    padding-bottom : ${props => props.theme.textInputPaddingBottom};
    padding-left   : ${props => props.theme.textInputPaddingLeft};

    outline : none;
    resize: none;
    flex: 1 0 auto;

    &:focus {
      border-color : ${props => props.theme.textInputBorderColorActive};
    }

    &::placeholder {
      color       : ${props => props.theme.textInputPlaceholderColor};
      font-weight : ${props => props.theme.textInputPlaceholderFontWeight};
    }
  `;

  const StyledLabel = styled.label`
    margin-bottom  : ${props => props.theme.textInputLabelMarginBottom};
    color          : ${props => props.theme.textInputLabelColor};
    font-family    : ${props => props.theme.textInputFontFamily};
    font-size      : ${props => props.theme.textInputLabelFontSize};
    text-transform : ${props => props.theme.textInputLabelTextTransform};
  `;

  return React.createElement(
    StyledWrapper,
    { className: props.className },
    React.createElement(
      StyledLabel,
      null,
      props.label
    ),
    React.createElement(
      StyledTextArea,
      {
        onKeyUp: props.onKeyUp,
        rows: props.rows,
        cols: props.cols,
        placeholder: props.placeholder,
        maxlength: props.maxlength,
        autofocus: props.autofocus,
        readonly: props.readonly
      },
      props.children
    )
  );
};

TextArea.propTypes = {
  /** Class name for top-level wrapper **/
  className: PropTypes.string,

  /** A callback function to fire when user is typing */
  onKeyUp: PropTypes.func,

  /** Placeholder text */
  placeholder: PropTypes.string,

  /** Label text for the TextArea */
  label: PropTypes.string,

  /** Specifies the visible number of lines in a text area **/
  rows: PropTypes.number,

  /** Specifies the visible width of a text area **/
  cols: PropTypes.number,

  /** Specifies the maximum number of characters allowed in the text area **/
  maxlength: PropTypes.number,

  /** Specifies that a text area should automatically get focus when the page loads **/
  autofocus: PropTypes.bool,

  /** Specifies that a text area should be read-only **/
  readonly: PropTypes.bool
};

TextArea.defaultProps = {
  className: ''
};

/** @component */
export default TextArea;