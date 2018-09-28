import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const DMLBalanceUpdate = props => {
  const StyledDMLBalanceUpdate = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledDMLBalanceUpdate, {
    onUpdate: '',
    currentBalance: ''
  });
};

DMLBalanceUpdate.propTypes = {
  /** A callback function to fire on update */
  onUpdate: PropTypes.any,

  /** A number with the current balance */
  currentBalance: PropTypes.any
};

/** @component */
export default DMLBalanceUpdate;