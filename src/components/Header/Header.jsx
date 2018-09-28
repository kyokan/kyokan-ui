import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Header = (props) => {
  const StyledHeader = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledHeader>
      {props.children}
    </StyledHeader>
  );
};

Header.propTypes = {
  /** The header text to be displayed */
  children: PropTypes.any,
};

/** @component */
export default Header;
