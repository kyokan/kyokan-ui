import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Image = props => {
  const StyledImage = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledImage, {
    url: ''
  });
};

Image.propTypes = {
  /** A string with the url of the image */
  url: PropTypes.any
};

/** @component */
export default Image;