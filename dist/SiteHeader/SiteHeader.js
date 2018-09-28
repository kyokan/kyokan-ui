import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const SiteHeader = props => {
  const StyledSiteHeader = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledSiteHeader,
    null,
    props.children
  );
};

SiteHeader.propTypes = {
  /** Any content */
  children: PropTypes.any
};

/** @component */
export default SiteHeader;