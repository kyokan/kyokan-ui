import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const MetaMaskButton = (props) => {
  const StyledMetaMaskButton = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledMetaMaskButton>
      {props.children}
    </StyledMetaMaskButton>
  );
};

MetaMaskButton.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default MetaMaskButton;
