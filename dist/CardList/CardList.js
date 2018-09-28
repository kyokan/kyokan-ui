import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const CardList = props => {
  const StyledCardList = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledCardList,
    null,
    props.children
  );
};

CardList.propTypes = {
  /** The cards to be shown */
  children: PropTypes.any
};

/** @component */
export default CardList;