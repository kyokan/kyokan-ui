import React from 'react';
import styled from 'styled-components';

/**
* A horizontal rule.
*/
const HorizontalRule = (props) => {
  const StyledHorizontalRule = styled.hr`
    color:        ${ (props) => props.theme.horizontalRuleColor };
    border-style: ${ (props) => props.theme.horizontalRuleBorderStyle }
  `;

  return (
    <StyledHorizontalRule />
  );
};

/** @component */
export default HorizontalRule;
