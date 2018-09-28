import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const HorizontalTab = (props) => {
  const StyledHorizontalTab = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledHorizontalTab
      isActive=""
    >
      {props.children}
    </StyledHorizontalTab>
  );
};

HorizontalTab.propTypes = {
  /** The content of the tab */
  children: PropTypes.any,

  /** A boolean which triggers the application of the active styles */
  isActive: PropTypes.any,
};

/** @component */
export default HorizontalTab;
