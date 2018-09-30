import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TagsDropdown = props => {
  const StyledTagsDropdown = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledTagsDropdown,
    null,
    props.children
  );
};

TagsDropdown.propTypes = {
  /** Tags */
  children: PropTypes.any
};

/** @component */
export default TagsDropdown;