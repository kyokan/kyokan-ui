import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A collection of Cards.
*/
const CardList = (props) => {
  const StyledCardList = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledCardList>
      {props.children}
    </StyledCardList>
  );
};

CardList.propTypes = {
  /** The cards to be shown */
  children: PropTypes.any.isRequired,
};

/** @component */
export default CardList;
