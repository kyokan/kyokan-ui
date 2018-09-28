import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Pagination = props => {
  const StyledPagination = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledPagination, {
    currentPage: '',
    totalCount: ''
  });
};

Pagination.propTypes = {
  /** An integer with the current page */
  currentPage: PropTypes.any,

  /** An integer with the total count of pages */
  totalCount: PropTypes.any
};

/** @component */
export default Pagination;