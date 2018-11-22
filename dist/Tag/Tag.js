import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A snippet of text to serve as a tag.
*/
const Tag = props => {
  const StyledTag = styled.div`
    font-family      : 'Barlow';
    display          : inline-block;
    margin           : 0 5px;
    padding          : 6px 12px;
    color            : ${props.isActive ? 'white' : 'gray'};
    border-radius    : 3px;
    background-color : ${props.isActive ? 'rgb( 60, 129, 237)' : 'white'};

    &:hover {
      color  : rgb(41, 54, 74);
      cursor : pointer;
    }
  `;

  return React.createElement(
    StyledTag,
    null,
    props.name
  );
};

Tag.defaultProps = {
  isActive: false
};

Tag.propTypes = {
  /** The name of the tag */
  name: PropTypes.string.isRequired,

  /** Whether or not the tag is active */
  isActive: PropTypes.bool
};

/** @component */
export default Tag;