import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* Content (usually as opposed to SiteHeader).
*/
const Content = props => {
  const StyledContent = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledContent,
    null,
    props.children
  );
};

Content.propTypes = {
  /** Any content */
  children: PropTypes.any
};

/** @component */
export default Content;