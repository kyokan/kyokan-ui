import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const EmptyState = (props) => {
  const StyledEmptyState = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledEmptyState>
      {props.children}
    </StyledEmptyState>
  );
};

EmptyState.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default EmptyState;
