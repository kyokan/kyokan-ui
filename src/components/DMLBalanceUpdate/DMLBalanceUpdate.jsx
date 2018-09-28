import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const DMLBalanceUpdate = (props) => {
  const StyledDMLBalanceUpdate = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledDMLBalanceUpdate
      onUpdate=""
      currentBalance=""
    >
      
    </StyledDMLBalanceUpdate>
  );
};

DMLBalanceUpdate.propTypes = {
  /** A callback function to fire on update */
  onUpdate: PropTypes.any,

  /** A number with the current balance */
  currentBalance: PropTypes.any,
};

/** @component */
export default DMLBalanceUpdate;
