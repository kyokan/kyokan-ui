import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* The title text of the site - usually the largest text.
*/
const Title = props => {
  const StyledTitle = styled.div`
    font-family: ${props => props.theme.titleFontFamily};
    color:       ${props => props.theme.titleColor};
    font-weight: ${props => props.theme.titleFontWeight};
    text-align:  ${props => props.theme.titleTextAlign};
    font-size:   ${props => props.theme.titleFontSize};
    line-height: ${props => props.theme.titleLineHeight};
  `;

  return React.createElement(
    StyledTitle,
    null,
    props.children
  );
};

Title.propTypes = {
  /** The text to be displayed */
  children: PropTypes.string.isRequired
};

/** @component */
export default Title;