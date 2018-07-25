import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const CurrencyBalance = props => {
  const StyledCurrencyBalance = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledCurrencyBalance,
    null,
    props.children
  );
};

CurrencyBalance.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default CurrencyBalance;