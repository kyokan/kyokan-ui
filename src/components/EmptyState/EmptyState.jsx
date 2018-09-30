import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A standardized empty state.
*/
const EmptyState = (props) => {
  const StyledEmptyState = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledEmptyState>
      
    </StyledEmptyState>
  );
};

EmptyState.propTypes = {
  /** Title text */
  title: PropTypes.string.isRequired,

  /** Description text */
  description: PropTypes.string,
};

/** @component */
export default EmptyState;
