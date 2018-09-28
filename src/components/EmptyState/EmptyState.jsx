import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const EmptyState = (props) => {
  const StyledEmptyState = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledEmptyState
      title=""
      description=""
    >
      
    </StyledEmptyState>
  );
};

EmptyState.propTypes = {
  /** A string of title text */
  title: PropTypes.any,

  /** A string of description text */
  description: PropTypes.any,
};

/** @component */
export default EmptyState;
