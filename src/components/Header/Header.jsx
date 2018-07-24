import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Header = (props) => {
  const StyledHeader = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledHeader>
      {props.children}
    </StyledHeader>
  );
};

Header.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Header;
