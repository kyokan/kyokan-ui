import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TokenButton = (props) => {
  const StyledTokenButton = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTokenButton
      display=""
      value=""
      token=""
      onClick=""
    >

    </StyledTokenButton>
  );
};

TokenButton.propTypes = {
  /** A boolean which triggers display mode (where the button is inactive) */
  display: PropTypes.any,

  /** The value displayed */
  value: PropTypes.any,

  /** A string representing the type of token */
  token: PropTypes.any,

  /** A callback function which is fired on button click */
  onClick: PropTypes.any,
};

/** @component */
export default TokenButton;
