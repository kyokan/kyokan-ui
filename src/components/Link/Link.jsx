import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An anchor link. Supports either an 'href', an 'onClick' callback, or both.
*/
const Link = (props) => {
  const StyledLink = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledLink>
      
    </StyledLink>
  );
};

Link.propTypes = {
  /** A string of link text */
  text: PropTypes.string,

  /** A callback function to fire on Link click */
  onClick: PropTypes.func,

  /** A string with a URL to go to on click */
  href: PropTypes.string,
};

/** @component */
export default Link;
