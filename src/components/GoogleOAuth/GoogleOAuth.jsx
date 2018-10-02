import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './google_logo.svg';

/**
* A module that allows the user to connect to their Google account.
* Disconnecting is handled by a separate "Logout" component.
*/
const GoogleOAuth = (props) => {
  const StyledGoogleOAuth = styled.button`
    font-family      : ${ ({ theme }) => theme.googleOAuthFontFamily };
    color            : #000;
    display          : flex;
    flex-flow        : row nowrap;
    align-items      : center;
    background-color : #fff;
    border-radius    : 4px;
    border           : 1px solid rgba(0, 0, 0, 0.15);
    padding          : 0.5rem 1rem;
    cursor           : pointer;

    &:hover {
      background-color    : #e6ebf1;
      background-position : -0.5em;
      border-color        : rgba(27,31,35,0.35);
    }

    &:active {
      background-color : #4285F4;
      background-image : none;
      border-color     : #4285F4;
    }

    &:focus {
      outline : none;
    }
  `;

  const StyledDiv = styled.div`
    margin-left: 0.5rem;
  `;

  return (
    <StyledGoogleOAuth className={props.className} onClick={props.onClick}>
      <img src={logo} alt="" />
      <StyledDiv>Sign up with Google</StyledDiv>
    </StyledGoogleOAuth>
  );
};

GoogleOAuth.propTypes = {
  /** Class name for top-level wrapper **/
  className: PropTypes.string,

  /** A callback that is fired when the Google OAuth button is clicked */
  onClick: PropTypes.func,
};

GoogleOAuth.defaultProps = {
  className: '',
};

/** @component */
export default GoogleOAuth;
