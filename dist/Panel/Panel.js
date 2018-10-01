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
    background-color: ${props => props.theme.panelBackgroundColor};
    border-radius: ${props => props.theme.panelBorderRadius};
    box-shadow: ${props => props.theme.panelBoxShadow};
  `;

  return React.createElement(
    StyledPanel,
    { className: props.className },
    props.children
  );
};

Panel.propTypes = {
  /** Any content */
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

Panel.defaultProps = {
  className: ''
};

/** @component */
export default Panel;