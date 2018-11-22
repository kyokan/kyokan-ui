import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../Box';
import Icon from '../Icon';

/**
* A block element that fires an action on click. Loading buttons should be disabled while loading.
*/
const Button = props => {
  const StyledButton = styled.div`
    font-family      : ${({ theme }) => theme.buttonFontFamily};
    background-color : ${({ theme }) => theme.buttonPrimaryBackgroundColor};
    color            : ${({ theme }) => theme.buttonColor};

    border-width  : ${({ theme }) => theme.buttonBorderWidth};
    border-style  : ${({ theme }) => theme.buttonBorderStyle};
    border-color  : ${({ theme }) => theme.buttonBorderColor};
    border-radius : ${({ theme }) => props.unrounded ? 0 : theme.buttonBorderRadius};

    padding : ${({ theme }) => theme.buttonPadding};

    ${props.expand ? 'width: 100%; height: 100%;' : ''}

    cursor           : pointer;
    display          : inline-flex;
    flex-flow        : row nowrap;
    justify-content  : center;
    user-select      : none;
    white-space      : nowrap;

    &:hover {
      background-color: ${({ theme }) => theme.buttonPrimaryBackgroundColorHover};
    }

    &:active {
      background-color: ${({ theme }) => theme.buttonPrimaryBackgroundColorActive};
    }
  `;

  const renderIcon = iconName => {
    let icon = null;

    if (iconName.length) {
      icon = React.createElement(Icon, {
        name: iconName,
        size: 'lg'
      });
    }

    return icon;
  };

  const renderContent = () => {
    return React.createElement(
      Box,
      { horizontalMargin: 1 },
      props.children
    );
  };

  return React.createElement(
    StyledButton,
    {
      onClick: props.onClick,
      className: props.className
    },
    renderIcon(props.leftIcon),
    renderContent(),
    renderIcon(props.rightIcon)
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  leftIcon: '',
  light: false,
  loading: false,
  loadingText: '',
  onClick: event => {},
  rightIcon: '',
  type: 'brand',
  unroudned: false
};

Button.propTypes = {
  /** Text to display within the button */
  children: PropTypes.string.isRequired,

  /** Class name for top-level wrapper **/
  className: PropTypes.string,

  /** Whether or not a button is disabled */
  disabled: PropTypes.bool,

  /** Whether or not a button should expand to fit its container */
  expand: PropTypes.bool,

  /** The icon shown to the left of the button text */
  leftIcon: PropTypes.string,

  /** Whether or not to apply light styles */
  light: PropTypes.bool,

  /** Whether or not the button is displaying a loading state */
  loading: PropTypes.bool,

  /** The text to show as button text while 'isLoading' is true */
  loadingText: PropTypes.string,

  /** A callback function which is fired on button click */
  onClick: PropTypes.func,

  /** The icon shown to the right of the button text */
  rightIcon: PropTypes.string,

  /** One of the following: 'base', 'neutral', 'brand', 'brand-outline', 'destructive', 'success' */
  type: PropTypes.string,

  /** Whether or not the button is unrounded */
  unrounded: PropTypes.bool
};

/** @component */
export default Button;