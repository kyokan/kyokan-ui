import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const MetaMaskButton = props => {
  const StyledMetaMaskButton = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledMetaMaskButton, {
    onClick: ''
  });
};

MetaMaskButton.propTypes = {
  /** A callback function which is fired on button click */
  onClick: PropTypes.any
};

/** @component */
export default MetaMaskButton;