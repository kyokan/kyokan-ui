import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A 'cloud' of tags - a freeform way of expressing Tags.
*/
const TagsCloud = (props) => {
  const StyledTagsCloud = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledTagsCloud>
      
    </StyledTagsCloud>
  );
};

TagsCloud.propTypes = {
  /** An array of tag strings to display */
  tags: PropTypes.array.isRequired,
};

/** @component */
export default TagsCloud;
