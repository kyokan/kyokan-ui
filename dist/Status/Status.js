import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A message styled as a notification for the user.
*/
const Status = props => {
  const StyledStatus = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledStatus, null);
};

Status.propTypes = {
  /** A string of text to be displayed within the status */
  text: PropTypes.string.isRequired,

  /** An icon to display before the status text */
  icon: PropTypes.string,

  /** Whether or not the Status is a success status */
  success: PropTypes.bool,

  /** Whether or not the Status is a error status */
  error: PropTypes.bool,

  /** Whether or not the Status is a warning status */
  warning: PropTypes.bool,

  /** Whether or not the Status is a info status */
  info: PropTypes.bool
};

/** @component */
export default Status;