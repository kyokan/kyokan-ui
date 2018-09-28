import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Row = props => {
  const StyledRow = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
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