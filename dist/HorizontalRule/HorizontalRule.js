import React from 'react';
import styled from 'styled-components';

/**
* A horizontal rule.
*/
const HorizontalRule = props => {
  const StyledHorizontalRule = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledHorizontalRule, null);
};

HorizontalRule.propTypes = {};

/** @component */
export default HorizontalRule;