import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A control module that allows a user to change pages.
*/
const Pagination = (props) => {
  const StyledPagination = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledPagination>
      
    </StyledPagination>
  );
};

Pagination.propTypes = {
  /** The current page index */
  currentPage: PropTypes.number.isRequired,

  /** The total count of pages */
  totalCount: PropTypes.number.isRequired,
};

/** @component */
export default Pagination;
