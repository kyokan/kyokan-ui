import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TokenAmount = props => {
  const StyledTokenAmount = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledTokenAmount, {
    amount: '',
    token: ''
  });
};

TokenAmount.propTypes = {
  /** A number with the amount */
  amount: PropTypes.any,

  /** A string with the name of the token */
  token: PropTypes.any
};

/** @component */
export default TokenAmount;