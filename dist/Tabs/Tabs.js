import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A collection of tab components (either all VerticalTab or HorizontalTab).
*/
const Tabs = props => {
  const StyledTabs = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledTabs,
    null,
    props.children
  );
};

Tabs.propTypes = {
  /** A set of tab components to display */
  children: PropTypes.any.isRequired,

  /** A unique identifier for which of the tab components will be active */
  activeKey: PropTypes.string
};

/** @component */
export default Tabs;