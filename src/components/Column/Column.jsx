import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Column = (props) => {
  const StyledColumn = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledColumn
      width=""
    >
      {props.children}
    </StyledColumn>
  );
};

Column.propTypes = {
  /** Any content */
  children: PropTypes.any,

  /** A number representing column width */
  width: PropTypes.any,
};

/** @component */
export default Column;
