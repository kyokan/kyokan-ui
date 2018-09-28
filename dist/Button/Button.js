import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* Loading buttons should be disabled while loading.
*/
const Button = props => {
  const StyledButton = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledButton, {
    text: '',
    isLoading: '',
    loadingText: '',
    disabled: '',
    type: '',
    rightIcon: '',
    leftIcon: '',
    light: ''
  });
};

Button.propTypes = {
  /** The Button text */
  text: PropTypes.any,

  /** A boolean of whether or not the button is displaying a loading state */
  isLoading: PropTypes.any,

  /** A string of text to display as the Button text when isLoading is set to true */
  loadingText: PropTypes.any,

  /** A boolean of whether or not a button is disabled */
  disabled: PropTypes.any,

  /** One of the following: 'base', 'neutral', 'brand', 'brand-outline', 'destructive', 'success' */
  type: PropTypes.any,

  /** The icon shown to the right of the Button text */
  rightIcon: PropTypes.any,

  /** The icon shown to the left of the Button text */
  leftIcon: PropTypes.any,

  /** Boolean to apply light styles */
  light: PropTypes.any
};

/** @component */
export default Button;