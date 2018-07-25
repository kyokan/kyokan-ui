import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const BrandHeader = props => {
  const StyledBrandHeader = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledBrandHeader,
    null,
    props.children
  );
};

BrandHeader.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default BrandHeader;