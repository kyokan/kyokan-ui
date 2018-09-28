import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Link = (props) => {
  const StyledLink = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledLink
      text=""
      onClick=""
      href=""
    >
      
    </StyledLink>
  );
};

Link.propTypes = {
  /** A string of link text */
  text: PropTypes.any,

  /** A callback function to fire on Link click */
  onClick: PropTypes.any,

  /** A string with a URL to go to on click */
  href: PropTypes.any,
};

/** @component */
export default Link;
