import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Status = (props) => {
  const StyledStatus = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledStatus
      text=""
      icon=""
      success=""
      error=""
      warning=""
      info=""
    >
      
    </StyledStatus>
  );
};

Status.propTypes = {
  /** A string of text to be displayed within the status */
  text: PropTypes.any,

  /** An icon to display before the status text */
  icon: PropTypes.any,

  /** A boolean which triggers success styles */
  success: PropTypes.any,

  /** A boolean which triggers error styles */
  error: PropTypes.any,

  /** A boolean which triggers warning styles */
  warning: PropTypes.any,

  /** A boolean which triggers info styles */
  info: PropTypes.any,
};

/** @component */
export default Status;
