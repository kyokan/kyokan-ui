import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A container for repeatable entities.
*/
const Card = props => {
  const StyledCard = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledCard,
    null,
    props.children
  );
};

Card.propTypes = {
  /** Any content */
  children: PropTypes.any
};

/** @component */
export default Card;