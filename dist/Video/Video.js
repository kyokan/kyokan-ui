import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Video = props => {
  const StyledVideo = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledVideo,
    null,
    props.children
  );
};

Video.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Video;