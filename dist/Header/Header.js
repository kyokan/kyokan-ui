import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* Text that serves as a header.
*/
const Header = props => {
  const StyledHeader = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.headerTextColor};
    font-weight: 500;
  `;

  return React.createElement(
    StyledHeader,
    { className: props.className },
    props.children
  );
};

Header.propTypes = {
  /** Class name for top level wrapper **/
  className: PropTypes.string,

  /** The header text to be displayed */
  children: PropTypes.string.isRequired
};

Header.defaultProps = {
  className: ''
};

/** @component */
export default Header;