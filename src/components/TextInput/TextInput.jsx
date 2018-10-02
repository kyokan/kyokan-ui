import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A text input field.
*/
const TextInput = (props) => {
  const shouldShowError = !props.disableErrorMessage && props.errorMessage;

  const StyledTextInput = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
    display: flex;
    flex-flow: column nowrap;
  `;

  const StyledLabel = styled.div`
  
  `;

  const StyledErrorMessage = styled.div`
    color: ${ props => props.theme.textInputErrorColor };
    font-weight: 100;
    font-size: .9rem;
    line-height: 2.2rem;
  `;

  const StyledInput = styled.input`
    border-radius: 3px;
    padding: .5rem 1rem;
    border: 1px solid ${ props => props.theme.textInputBorderColor };
    outline: none;
    color: ${ ({ theme }) => theme.textInputColor };
    border-color: ${ ({ theme }) => shouldShowError ? theme.textInputErrorColor : theme.textInputBorderColor };
    font-weight: 300;
    
    &:focus {
      border: 1px solid ${ props => props.theme.textInputActiveBorderColor };
      border-color: ${ ({ theme }) => shouldShowError ? theme.textInputErrorColor : theme.textInputActiveBorderColor };
    }
    
    &::placeholder {
      color: ${ props => props.theme.textInputPlaceholderColor };
      font-weight: 100;
    }
  `;

  return (
    <StyledTextInput className={props.className}>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      { shouldShowError ? <StyledErrorMessage>{props.errorMessage}</StyledErrorMessage> : null }
    </StyledTextInput>
  );
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

  /** Error Message text */
  errorMessage: PropTypes.string,

  /** Show/Hide Error Message */
  disableErrorMessage: PropTypes.bool,

  /** Placeholder text */
  placeholder: PropTypes.string,

  /** Fired on input value change */
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  className: '',
  type: 'text',
  errorMessage: '',
};

/** @component */
export default TextInput;
