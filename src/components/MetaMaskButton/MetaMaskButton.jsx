import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An orange button used to connect to Metamask.
*/
const MetaMaskButton = (props) => {
  const StyledMetaMaskButton = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledMetaMaskButton>
      
    </StyledMetaMaskButton>
  );
};

MetaMaskButton.propTypes = {
  /** A callback function which is fired on button click */
  onClick: PropTypes.func.isRequired,
};

/** @component */
export default MetaMaskButton;
