import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import shortID from 'shortid';

/**
* A text input field.
*/
const TextInput = props => {
  const id = shortID.generate(); // to tie label to input
  const shouldShowError = props.error && props.errorMessage;

  const StyledTextInput = styled.div`
    display     : flex;
    flex-flow   : column nowrap;

    font-family : ${props => props.theme.textInputFontFamily};
    color       : ${props => props.theme.textInputColor};
  `;

  const StyledInput = styled.input`
    font-family : ${props => props.theme.textInputFontFamily};
    font-weight : ${props => props.theme.textInputFontWeight};
    font-size   : ${props => props.theme.textInputFontSize};
    color       : ${props => props.theme.textInputColor};

    border-color  : ${props => shouldShowError ? props.theme.textInputBorderColorError : props.theme.textInputBorderColor};
    border-width  : ${props => props.theme.textInputBorderWidth};
    border-style  : ${props => props.theme.textInputBorderStyle};
    border-radius : ${props => props.theme.textInputBorderRadius};

    padding-top    : ${props => props.theme.textInputPaddingTop};
    padding-right  : ${props => props.theme.textInputPaddingRight};
    padding-bottom : ${props => props.theme.textInputPaddingBottom};
    padding-left   : ${props => props.theme.textInputPaddingLeft};

    outline : none;

    &:focus {
      border-color : ${props => shouldShowError ? props.theme.textInputBorderColorActiveError : props.theme.textInputBorderColorActive};
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

  const StyledErrorMessage = styled.div`
    margin-top  : ${props => props.theme.textInputErrorMessageMarginTop};
    color       : ${props => props.theme.textInputErrorMessageColor};
    font-family : ${props => props.theme.textInputFontFamily};
    font-size   : ${props => props.theme.textInputErrorMessageFontSize};
    font-weight : ${props => props.theme.textInputErrorMessageFontWeight};
  `;

  function renderLabel() {
    let output = null;

    if (props.label) {
      return React.createElement(
        StyledLabel,
        {
          htmlFor: id
        },
        props.label
      );
    }

    return output;
  }

  function renderErrorMessage() {
    let output = null;

    if (shouldShowError) {
      output = React.createElement(
        StyledErrorMessage,
        null,
        props.errorMessage
      );
    }

    return output;
  }

  return React.createElement(
    StyledTextInput,
    {
      className: props.className
    },
    renderLabel(),
    React.createElement(StyledInput, {
      id: id,
      'data-id': props['data-id'],
      type: props.type,
      placeholder: props.placeholder,
      defaultValue: props.value,
      onChange: event => {
        // either the native DOM event or nothing
        // (we don't want to return the Synthetic React event)
        props.onChange(event.nativeEvent);
      }
    }),
    renderErrorMessage()
  );
};

TextInput.defaultProps = {
  className: '',
  error: false,
  errorMessage: '',
  label: '',
  placeholder: '',
  onChange: () => {},
  type: 'text',
  value: '',
  'data-id': ''
};

TextInput.propTypes = {
  /** Text to display in the text input field */
  value: PropTypes.string,

  /** Class name for top-level wrapper */
  className: PropTypes.string,

  /** The text to display as the label for the text input */
  label: PropTypes.string,

  /** Type for input */
  type: PropTypes.oneOf(['text', 'password', 'number', 'email']),

  /** Error message text; must be set alongside `error` */
  errorMessage: PropTypes.string,

  /** Whether or not the input is in an error state; must be set alongside `errorMessage` */
  error: PropTypes.bool,

  /** Placeholder text */
  placeholder: PropTypes.string,

  /** Fired on input value change */
  onChange: PropTypes.func,

  /** A data attribute ID (used in place of refs since this is a stateless component) */
  'data-id': PropTypes.string
};

/** @component */
export default TextInput;