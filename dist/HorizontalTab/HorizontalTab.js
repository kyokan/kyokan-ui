import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A tab that will be toggled from a horizontal control.
*/
const HorizontalTab = props => {
  const StyledHorizontalTab = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledHorizontalTab,
    null,
    props.children
  );
};

HorizontalTab.propTypes = {
  /** The content of the tab */
  children: PropTypes.any.isRequired,

  /** A boolean which triggers the application of the active styles */
  active: PropTypes.bool
};

/** @component */
export default HorizontalTab;