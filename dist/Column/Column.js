import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A layout component that encapsulates vertical content.
*/
const Column = props => {
  const StyledColumn = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledColumn,
    null,
    props.children
  );
};

Column.propTypes = {
  /** Any content */
  children: PropTypes.any,

  /** Column width */
  width: PropTypes.number
};

/** @component */
export default Column;