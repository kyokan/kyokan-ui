import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Pagination = (props) => {
  const StyledPagination = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledPagination>
      {props.children}
    </StyledPagination>
  );
};

Pagination.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Pagination;
