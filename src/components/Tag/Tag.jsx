import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Tag = (props) => {
  const StyledTag = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTag
      name=""
      isActive=""
    >
      
    </StyledTag>
  );
};

Tag.propTypes = {
  /** A string with the name of the tag */
  name: PropTypes.any,

  /** A boolean representing whether or not the tag is active */
  isActive: PropTypes.any,
};

/** @component */
export default Tag;
