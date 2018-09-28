import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TagsInput = props => {
  const StyledTagsInput = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledTagsInput, {
    tags: ''
  });
};

TagsInput.propTypes = {
  /** An array of tag strings */
  tags: PropTypes.any
};

/** @component */
export default TagsInput;