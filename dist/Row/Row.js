import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A layout component that encapsulates horizontal content.
*/
const Row = props => {
  const StyledRow = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledRow,
    null,
    props.children
  );
};

Row.propTypes = {
  /** Any content */
  children: PropTypes.any
};

/** @component */
export default Row;