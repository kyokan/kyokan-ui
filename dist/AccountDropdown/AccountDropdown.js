import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A module that allows the user to quickly access user/account-level options. For example: 'Sign Out', 'Settings', etc.
*/
const AccountDropdown = props => {
  const StyledAccountDropdown = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledAccountDropdown,
    null,
    props.children
  );
};

AccountDropdown.propTypes = {
  /** A URL to the avatar image */
  avatar: PropTypes.string,

  /** The name of the user */
  name: PropTypes.string.isRequired,

  /** The content in the dropdown */
  children: PropTypes.any.isRequired,

  /** A callback function which is fired on dropdown open/close */
  onChange: PropTypes.func
};

/** @component */
export default AccountDropdown;