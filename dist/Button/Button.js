import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A block element that fires an action on click. Loading buttons should be disabled while loading.
*/
const Button = props => {
  const StyledButton = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    background-color: ${({ theme }) => theme.primaryButtonBackgroundColor};
    color: white;
    display: inline-block;
    padding: .625rem;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    user-select: none;
    
    &:hover {
      background-color: ${({ theme }) => theme.primaryButtonHoverBackgroundColor};
    }
    
    &:active {
      background-color: ${({ theme }) => theme.primaryButtonActiveBackgroundColor};
    }
  `;

  return React.createElement(
    StyledButton,
    {
      onClick: props.onClick
    },
    props.children
  );
};

Button.propTypes = {
  /** Text to display within the button */
  children: PropTypes.string.isRequired,

  /** Whether or not the button is displaying a loading state */
  loading: PropTypes.bool,

  /** The text to show as button text while 'isLoading' is true */
  loadingText: PropTypes.string,

  /** Whether or not a button is disabled */
  disabled: PropTypes.bool,

  /** One of the following: 'base', 'neutral', 'brand', 'brand-outline', 'destructive', 'success' */
  type: PropTypes.string,

  /** The icon shown to the right of the button text */
  rightIcon: PropTypes.string,

  /** The icon shown to the left of the button text */
  leftIcon: PropTypes.string,

  /** Whether or not to apply light styles */
  light: PropTypes.bool,

  /** A callback function which is fired on button click */
  onClick: PropTypes.func.isRequired
};

/** @component */
export default Button;