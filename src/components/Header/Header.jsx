import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* Text that serves as a header.
*/
const Header = (props) => {
  const StyledHeader = styled.div`
    font-family : ${ ({ theme }) => theme.textFontFamily };
    color       : ${ ({ theme }) => theme.headerTextColor };
    font-weight : ${ ({ theme }) => theme.headerFontWeight };
  `;

  return (
    <StyledHeader className={props.className}>
      {props.children}
    </StyledHeader>
  );
};

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  /** Class name for top level wrapper */
  className: PropTypes.string,

  /** The header text to be displayed */
  children: PropTypes.string.isRequired,
};

/** @component */
export default Header;
