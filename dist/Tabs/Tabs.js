import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Tabs = props => {
  const StyledTabs = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledTabs,
    null,
    props.children
  );
};

Tabs.propTypes = {
  /** Tabs */
  children: PropTypes.any
};

/** @component */
export default Tabs;