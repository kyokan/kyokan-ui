import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A block of content, almost like an inline modal.
*/
const Panel = props => {
  const StyledPanel = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledPanel,
    null,
    props.children
  );
};

Panel.propTypes = {
  /** Any content */
  children: PropTypes.any
};

/** @component */
export default Panel;