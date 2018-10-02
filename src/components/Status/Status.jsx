import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import classnames from 'classnames';

/**
* A message styled as a notification for the user.
*/
const Status = (props) => {
  const renderIcon = () => {
    let output = null;

    // if the user passed an icon string in
    if (props.icon) {
      let icon = null;

      // if the icon string the user passed in is one that we support
      if (props.icon === 'check') {
        icon = props.theme.statusIconCheck;
      }

      // if we were able to find the icon
      if (icon) {
        const StyledIcon = styled.div`
          display      : inline-block;
          margin-left  : ${ (props) => props.theme.statusIconMarginLeft };
          margin-right : ${ (props) => props.theme.statusIconMarginRight };
        `;

        output = (
          <StyledIcon>
            {icon}
          </StyledIcon>
        );
      }
    }

    return output;
  };

  const StyledStatus = styled.div`
    display       : ${ (props) => props.theme.statusDisplay };
    font-family   : ${ (props) => props.theme.statusFontFamily };
    border-radius : ${ (props) => props.theme.statusBorderRadius };
    padding       : ${ (props) => props.theme.statusPadding };
    line-height   : ${ (props) => props.theme.statusLineHeight };

    &.error {
      background-color : ${ (props) => props.theme.statusErrorBackgroundColor };
      color            : ${ (props) => props.theme.statusErrorTextColor };
    }

    &.success {
      background-color : ${ (props) => props.theme.statusSuccessBackgroundColor };
      color            : ${ (props) => props.theme.statusSuccessTextColor };
    }

    &.warning {
      background-color : ${ (props) => props.theme.statusWarningBackgroundColor };
      color            : ${ (props) => props.theme.statusWarningTextColor };
    }

    &.info {
      background-color : ${ (props) => props.theme.statusInfoBackgroundColor };
      color            : ${ (props) => props.theme.statusInfoTextColor };
      border-width     : ${ (props) => props.theme.statusInfoBorderWidth };
      border-style     : ${ (props) => props.theme.statusInfoBorderStyle };
      border-color     : ${ (props) => props.theme.statusInfoBorderColor };
      padding          : ${ (props) => props.theme.statusInfoPadding };
    }
  `;

  const classes = classnames({
    error   : props.error,
    info    : props.info,
    success : props.success,
    warning : props.warning,
  });

  return (
    <StyledStatus
      className={classes}
    >
      {renderIcon()}
      {props.children}
    </StyledStatus>
  );
};

Status.propTypes = {
  /** The text to display as the status text */
  children: PropTypes.any.isRequired,

  /** An icon to display before the status text */
  icon: PropTypes.oneOf(['check']),

  /** Whether or not the Status is a success status */
  success: PropTypes.bool,

  /** Whether or not the Status is a error status */
  error: PropTypes.bool,

  /** Whether or not the Status is a warning status */
  warning: PropTypes.bool,

  /** Whether or not the Status is a info status */
  info: PropTypes.bool,
};

/** @component */
export default withTheme(Status);
