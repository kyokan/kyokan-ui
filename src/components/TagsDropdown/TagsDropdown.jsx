import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A small widget to condense tags.
*/
const TagsDropdown = (props) => {
  const StyledTagsDropdown = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledTagsDropdown>
      
    </StyledTagsDropdown>
  );
};

TagsDropdown.propTypes = {
  /** An array of tags to display */
  tags: PropTypes.array.isRequired,

  /** A callback to fire on dropdown open */
  onClick: PropTypes.func,

  /** A callback to fire on tag click */
  onTagClick: PropTypes.func,
};

/** @component */
export default TagsDropdown;
