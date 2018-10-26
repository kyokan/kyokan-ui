import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tag from '../Tag';

const StyledTagsCloud = styled.div`
  width: 100%;
`;

/**
* A 'cloud' of tags - a freeform way of expressing Tags.
*/
const TagsCloud = (props) => {
  return (
    <StyledTagsCloud>
      {props.tags.map((tag) => {
        return (
          <Tag
            name={tag.name}
            isActive={tag.isActive}
          />
        );
      })}
    </StyledTagsCloud>
  );
};

TagsCloud.propTypes = {
  /** An array of tag strings to display */
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/** @component */
export default TagsCloud;
