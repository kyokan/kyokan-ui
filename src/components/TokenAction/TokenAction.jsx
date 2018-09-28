import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TokenAction = (props) => {
  const StyledTokenAction = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTokenAction
      amount=""
      token=""
      buttonText=""
      onClick=""
    >
      
    </StyledTokenAction>
  );
};

TokenAction.propTypes = {
  /** A number with the amount */
  amount: PropTypes.any,

  /** A string with the name of the token */
  token: PropTypes.any,

  /** A string with the text to show as the button text */
  buttonText: PropTypes.any,

  /** A callback function to fire on button click */
  onClick: PropTypes.any,
};

/** @component */
export default TokenAction;
