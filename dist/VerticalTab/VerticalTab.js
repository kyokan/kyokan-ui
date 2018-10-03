import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A tab that will be toggled from a vertical control.
*/
const VerticalTab = props => {
  const StyledVerticalTab = styled.div`
    font-family : ${({ theme }) => theme.verticalTabFontFamily};
    color       : ${({ theme }) => theme.verticalTabColor};
  `;

  return React.createElement(
    StyledVerticalTab,
    null,
    props.children
  );
};

VerticalTab.propTypes = {
  /** The content of the tab */
  children: PropTypes.any.isRequired,

  /** The title of the tab */
  title: PropTypes.string.isRequired
};

/** @component */
export default VerticalTab;