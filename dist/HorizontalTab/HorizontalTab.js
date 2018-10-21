import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A tab that will be toggled from a horizontal control.
*/
const HorizontalTab = props => {
  const StyledHorizontalTab = styled.div`
    font-family : ${({ theme }) => theme.horizontalTabFontFamily};
    color       : ${({ theme }) => theme.horizontalTabColor};
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

  /** The title of the tab */
  title: PropTypes.string.isRequired
};

/** @component */
export default HorizontalTab;