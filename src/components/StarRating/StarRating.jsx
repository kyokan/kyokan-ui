import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const StarRating = (props) => {
  const StyledStarRating = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledStarRating>
      {props.children}
    </StyledStarRating>
  );
};

StarRating.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default StarRating;
