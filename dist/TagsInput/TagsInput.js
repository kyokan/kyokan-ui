import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An input field that allows the user to select tags from a dropdown.
*/
const TagsInput = props => {
  const StyledTagsInput = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledTagsInput, null);
};

TagsInput.propTypes = {
  /** An array of tag strings */
  tags: PropTypes.array,

  /** An array of selected tag strings */
  selectedTags: PropTypes.array,

  /** Fired on tags selection change */
  onChange: PropTypes.func
};

/** @component */
export default TagsInput;