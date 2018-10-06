import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A display with a number and a token symbol.
*/
const TokenAmount = props => {
  const StyledTokenAmount = styled.div`
    font-family : ${props => props.theme.textFontFamily};
    color       : ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledTokenAmount,
    null,
    props.amount
  );
};

TokenAmount.propTypes = {
  /** A number with the amount */
  amount: PropTypes.number,

  /** A string with the name of the token */
  token: PropTypes.string
};

/** @component */
export default TokenAmount;