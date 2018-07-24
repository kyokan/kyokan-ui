import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Link = (props) => {
  const StyledLink = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledLink>
      {props.children}
    </StyledLink>
  );
};

Link.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Link;
