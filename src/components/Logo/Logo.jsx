import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A branding logo.
*/
const Logo = (props) => {
  const StyledLogo = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledLogo>
      
    </StyledLogo>
  );
};

Logo.propTypes = {
  /** The name of the logo */
  name: PropTypes.string.isRequired,

  /** Whether or not the logo is dark-styled */
  dark: PropTypes.bool,
};

/** @component */
export default Logo;
