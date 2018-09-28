import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const VerticalTab = props => {
  const StyledVerticalTab = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledVerticalTab,
    {
      isActive: ''
    },
    props.children
  );
};

VerticalTab.propTypes = {
  /** The content of the tab */
  children: PropTypes.any,

  /** A boolean which triggers the application of the active styles */
  isActive: PropTypes.any
};

/** @component */
export default VerticalTab;