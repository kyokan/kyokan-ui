import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './facebook_logo.svg';

/**
* A module that allows the user to connect to their Facebook account.
* Disconnecting is handled by a separate "Logout" component.
*/
const FacebookOAuth = (props) => {
  const StyledFacebookOAuth = styled.button`
    font-family      : ${ ({ theme }) => theme.facebookOAuthFontFamily };
    font-size        : ${ ({ theme }) => theme.facebookOAuthFontSize };
    color            : #000;
    width            : 100%;
    display          : flex;
    flex-flow        : row nowrap;
    align-items      : center;
    background       : #fff;
    border-radius    : 4px;
    border           : 1px solid rgba(0, 0, 0, 0.15);
    padding          : 0;
    cursor           : pointer;

    &:hover {
      background-color    : #e6ebf1;
      border-color        : rgba(27,31,35,0.35);
    }

    &:active,
    &[aria-pressed="true"] {
      color            : #fff;
      background-color : #4285F4;
      border-color     : #4285F4;
    }

    &:focus {
      outline : none;
    }
  `;

  const StyledImg = styled.img`
    width : 3rem;
  `;

  const StyledDiv = styled.div`
    margin-right : 3rem;
    flex-grow    : 1;
  `;

  const onClick = function (e) {
    return props.loading || !props.onClick ? null : props.onClick(e);
  }

  return (
    <StyledFacebookOAuth className={props.className} onClick={onClick} role="button" aria-pressed={props.loading ? 'true' : 'false'}>
      <StyledImg src={logo} alt="" />
      <StyledDiv>Sign up with Facebook</StyledDiv>
    </StyledFacebookOAuth>
  );
};

FacebookOAuth.propTypes = {
  /** Class name for top-level wrapper **/
  className: PropTypes.string,

  /** Whether or not the button is loading (whether OAuth is in progress) */
  loading: PropTypes.bool,

  /** A callback that is fired when the Facebook OAuth button is clicked and not loading */
  onClick: PropTypes.func.isRequired,
};

FacebookOAuth.defaultProps = {
  className: '',
};

/** @component */
export default FacebookOAuth;
