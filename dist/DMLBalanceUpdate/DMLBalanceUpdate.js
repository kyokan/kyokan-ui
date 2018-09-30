import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A block where one can update their DML Limit.
*/
const DMLBalanceUpdate = props => {
  const StyledDMLBalanceUpdate = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledDMLBalanceUpdate, null);
};

DMLBalanceUpdate.propTypes = {
  /** A callback to fire on update */
  onUpdate: PropTypes.func,

  /** A number with the current balance */
  currentBalance: PropTypes.number
};

/** @component */
export default DMLBalanceUpdate;