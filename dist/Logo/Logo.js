import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Logo = props => {
  const StyledLogo = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledLogo, {
    imgsrc: '',
    dark: ''
  });
};

Logo.propTypes = {
  /** The url for the logo image */
  imgsrc: PropTypes.any,

  /** A boolean which triggers the dark styling of the logo */
  dark: PropTypes.any
};

/** @component */
export default Logo;