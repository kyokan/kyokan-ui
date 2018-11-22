import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTokenAmount = styled.div`
  font-family : 'Barlow';
  display     : inline-flex;
  align-items : center;
`;

const StyledValue = styled.div`
  font-size: 24px;
`;

/**
* A display with a number and a token symbol.
*/
const TokenAmount = props => {
  const StyledToken = styled.div`
    font-size        : 10px;
    margin           : 0 8px;
    padding          : 3px 8px;
    color            : ${props.dark ? 'white' : 'rgb(41, 54, 74)'};
    background-color : ${props.dark ? 'rgb(60, 129, 237)' : 'white'};
    border-radius    : 3px;
  `;

  return React.createElement(
    StyledTokenAmount,
    null,
    React.createElement(
      StyledValue,
      null,
      props.amount
    ),
    React.createElement(
      StyledToken,
      null,
      props.token
    )
  );
};

TokenAmount.defaultProps = {
  dark: false
};

TokenAmount.propTypes = {
  /** A number with the amount */
  amount: PropTypes.number.isRequired,

  /** A string with the name of the token */
  token: PropTypes.string.isRequired,

  /** Whether or not the token amount shows up with dark styles */
  dark: PropTypes.bool
};

/** @component */
export default TokenAmount;