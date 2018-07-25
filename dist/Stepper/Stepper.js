import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Stepper = props => {
  const StyledStepper = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledStepper,
    null,
    props.children
  );
};

Stepper.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Stepper;