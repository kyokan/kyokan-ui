import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const StarRating = (props) => {
  const StyledStarRating = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledStarRating
      totalNumberOfStars=""
      starredCount=""
      averageCount=""
    >

    </StyledStarRating>
  );
};

StarRating.propTypes = {
  /** Variable number of stars */
  totalNumberOfStars: PropTypes.any,

  /** Enforces whole stars */
  starredCount: PropTypes.any,

  /** Allows for partial stars */
  averageCount: PropTypes.any,
};

/** @component */
export default StarRating;
