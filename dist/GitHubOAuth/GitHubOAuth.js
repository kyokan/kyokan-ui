import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const GitHubOAuth = props => {
  const StyledGitHubOAuth = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledGitHubOAuth, {
    isLoggedIn: '',
    avatar: '',
    username: '',
    onCancel: ''
  });
};

GitHubOAuth.propTypes = {
  /** A boolean that allows */
  isLoggedIn: PropTypes.any,

  /** The url of the avatar image */
  avatar: PropTypes.any,

  /** The username text to be displayed */
  username: PropTypes.any,

  /** A callback function that is fired when the close button is clicked */
  onCancel: PropTypes.any
};

/** @component */
export default GitHubOAuth;