import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const OAuthButton = (props) => {
  const StyledOAuthButton = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledOAuthButton>
      {props.children}
    </StyledOAuthButton>
  );
};

OAuthButton.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default OAuthButton;
