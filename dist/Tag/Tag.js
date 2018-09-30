import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A snippet of text to serve as a tag.
*/
const Tag = props => {
  const StyledTag = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledTag, null);
};

Tag.propTypes = {
  /** The name of the tag */
  name: PropTypes.string,

  /** Whether or not the tag is active */
  isActive: PropTypes.bool
};

/** @component */
export default Tag;