import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const OAuthButton = props => {
  const StyledOAuthButton = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledOAuthButton,
    null,
    props.children
  );
};

OAuthButton.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default OAuthButton;