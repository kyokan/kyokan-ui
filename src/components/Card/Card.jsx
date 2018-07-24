import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Card = (props) => {
  const StyledCard = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
};

Card.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Card;
