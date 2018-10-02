import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './metamask_logo.svg';

/**
* An orange button used to connect to Metamask.
*/
const MetaMaskButton = (props) => {
  const StyledMetaMaskButton = styled.button`
    font-family      : ${ (props) => props.theme.metamaskButtonFontFamily };
    color            : #fff;
    display          : flex;
    flex-flow        : row nowrap;
    align-items      : center;
    background-color : #fb9a26;
    background-image : linear-gradient(-180deg,#fea13e 0%,#fa9203 90%);
    border-radius    : 4px;
    border           : 1px solid #ec8304;
    padding          : 0.5rem 1rem;
    cursor           : pointer;

    &:hover {
      background-color    : #fba952;
      background-image    : linear-gradient(-180deg,#fba952 0%,#f99914 90%);
      background-position : -0.5em;
    }

    &:active {
      background-color : #fba952;
      background-image : linear-gradient(-180deg,#ff992c 0%,#f38c00 90%);
    }

    &:focus {
      outline : none;
    }
  `;

  const StyledDiv = styled.div`
    margin-left: 1rem;
    color: #fff;
    letter-spacing: .02rem;
    font-weight: 400;
  `;

  return (
    <StyledMetaMaskButton className={props.className} onClick={props.onClick}>
      <img src={logo} />
      <StyledDiv>Install MetaMask</StyledDiv>
    </StyledMetaMaskButton>
  );
};

MetaMaskButton.defaultProps = {
  className: '',
};

MetaMaskButton.propTypes = {
  /** Class name for top-level wrapper */
  className: PropTypes.string,

  /** A callback function which is fired on button click */
  onClick: PropTypes.func.isRequired,
};

/** @component */
export default MetaMaskButton;
