import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const CurrencyLimitControl = props => {
  const StyledCurrencyLimitControl = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledCurrencyLimitControl,
    null,
    props.children
  );
};

CurrencyLimitControl.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default CurrencyLimitControl;