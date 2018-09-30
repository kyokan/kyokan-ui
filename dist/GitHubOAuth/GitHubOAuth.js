import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A module that allows the user to connect/disconnect to their GitHub account.
*/
const GitHubOAuth = props => {
  const StyledGitHubOAuth = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledGitHubOAuth, null);
};

GitHubOAuth.propTypes = {
  /** A boolean that triggers logged-in formatting */
  isLoggedIn: PropTypes.bool,

  /** The url of the avatar image for the user */
  avatar: PropTypes.string,

  /** The username text to be displayed */
  username: PropTypes.string,

  /** A callback that is fired when the close button is clicked */
  onCancel: PropTypes.func
};

/** @component */
export default GitHubOAuth;