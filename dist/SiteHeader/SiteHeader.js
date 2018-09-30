import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* The header for a site - should only have one per page.
*/
const SiteHeader = props => {
  const StyledSiteHeader = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledSiteHeader,
    null,
    props.children
  );
};

SiteHeader.propTypes = {
  /** Any content */
  children: PropTypes.any.isRequired
};

/** @component */
export default SiteHeader;