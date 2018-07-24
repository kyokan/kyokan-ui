import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Row = (props) => {
  const StyledRow = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledRow>
      {props.children}
    </StyledRow>
  );
};

Row.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Row;
