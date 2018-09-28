import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const SiteHeader = (props) => {
  const StyledSiteHeader = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledSiteHeader

    >
      {props.children}
    </StyledSiteHeader>
  );
};

SiteHeader.propTypes = {
  /** Any content */
  children: PropTypes.any,
};

/** @component */
export default SiteHeader;
