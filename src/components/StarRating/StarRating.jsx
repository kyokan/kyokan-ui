import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A star representation of a number rating.
*/
const StarRating = (props) => {
  const StyledStarRating = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledStarRating>
      
    </StyledStarRating>
  );
};

StarRating.propTypes = {
  /** The total number of stars */
  totalNumberOfStars: PropTypes.number.isRequired,

  /** The total number of stars checked */
  starredCount: PropTypes.number,

  /** A decimal number of the stars checked (allows partial stars); this setting overrides 'starredCount' */
  averageCount: PropTypes.number,
};

/** @component */
export default StarRating;
