import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* Text that serves as a header.
*/
const Header = props => {
  const StyledHeader = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledHeader,
    null,
    props.children
  );
};

Header.propTypes = {
  /** The header text to be displayed */
  children: PropTypes.string
};

/** @component */
export default Header;