import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TagsCloud = (props) => {
  const StyledTagsCloud = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTagsCloud

    >
      {props.children}
    </StyledTagsCloud>
  );
};

TagsCloud.propTypes = {
  /** The tags to be displayed */
  children: PropTypes.any,
};

/** @component */
export default TagsCloud;
