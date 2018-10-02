import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A horizontal rule with optional text overlay.
*/
const HorizontalRule = props => {

  const StyledContainer = styled.div`
    position        : relative;
    display         : flex;
    justify-content : center;
  `;

  const StyledText = styled.div`
    color            : ${({ theme }) => theme.panelTextColor};
    background-color : ${({ theme }) => theme.panelBackgroundColor};
    padding          : 0 0.5rem;
    z-index          : 100;
  `;

  const StyledHorizontalRule = styled.hr`
    color        : ${({ theme }) => theme.horizontalRuleColor};
    border-style : ${({ theme }) => theme.horizontalRuleBorderStyle};
    position     : absolute;
    top          : 0;
    left         : 0;
    width        : 100%;
  `;

  return React.createElement(
    StyledContainer,
    { className: props.className },
    React.createElement(StyledHorizontalRule, null),
    props.text && React.createElement(
      StyledText,
      null,
      props.text
    )
  );
};

HorizontalRule.propTypes = {
  /** Class name for top-level wrapper **/
  className: PropTypes.string,

  /** Overlay text */
  text: PropTypes.string
};

HorizontalRule.defaultProps = {
  className: ''
};

/** @component */
export default HorizontalRule;