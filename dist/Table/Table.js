import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Table = props => {
  const StyledTable = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledTable,
    null,
    props.children
  );
};

Table.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Table;