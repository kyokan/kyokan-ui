import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A composed component of a TokenAmount and a Button.
*/
const TokenAction = props => {
  const StyledTokenAction = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledTokenAction, null);
};

TokenAction.propTypes = {
  /** The amount */
  amount: PropTypes.number.isRequired,

  /** The name of the token */
  token: PropTypes.string.isRequired,

  /** Text to show as the button text */
  buttonText: PropTypes.string.isRequired,

  /** A callback function to fire on button click */
  onClick: PropTypes.func
};

/** @component */
export default TokenAction;