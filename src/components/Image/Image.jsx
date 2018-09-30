import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An image.
*/
const Image = (props) => {
  const StyledImage = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledImage>
      
    </StyledImage>
  );
};

Image.propTypes = {
  /** A string with the url of the image */
  url: PropTypes.string.isRequired,
};

/** @component */
export default Image;
