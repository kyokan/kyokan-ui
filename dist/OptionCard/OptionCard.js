import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const OptionCard = props => {
  const StyledOptionCard = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledOptionCard,
    null,
    props.children
  );
};

OptionCard.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default OptionCard;