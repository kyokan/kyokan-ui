import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

/**
* A message styled as a notification for the user.
*/
const Status = props => {
  const StyledStatus = styled.div`
    display       : ${props => props.theme.statusDisplay};
    font-family   : ${props => props.theme.statusFontFamily};
    border-radius : ${props => props.theme.statusBorderRadius};
    padding       : ${props => props.theme.statusPadding};
    line-height   : ${props => props.theme.statusLineHeight};

    &.error {
      background-color : ${props => props.theme.statusErrorBackgroundColor};
      color            : ${props => props.theme.statusErrorTextColor};
    }

    &.success {
      background-color : ${props => props.theme.statusSuccessBackgroundColor};
      color            : ${props => props.theme.statusSuccessTextColor};
    }

    &.warning {
      background-color : ${props => props.theme.statusWarningBackgroundColor};
      color            : ${props => props.theme.statusWarningTextColor};
    }

    &.info {
      background-color : ${props => props.theme.statusInfoBackgroundColor};
      color            : ${props => props.theme.statusInfoTextColor};
      border-width     : ${props => props.theme.statusInfoBorderWidth};
      border-style     : ${props => props.theme.statusInfoBorderStyle};
      border-color     : ${props => props.theme.statusInfoBorderColor};
      padding          : ${props => props.theme.statusInfoPadding};
    }
  `;

  const classes = classnames({
    error: props.error,
    info: props.info,
    success: props.success,
    warning: props.warning
  });

  return React.createElement(
    StyledStatus,
    {
      className: classes
    },
    props.children
  );
};

Status.propTypes = {
  /** The text to display as the status text */
  children: PropTypes.any.isRequired,

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