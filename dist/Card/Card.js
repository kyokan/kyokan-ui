import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Card = props => {
  const StyledCard = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
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