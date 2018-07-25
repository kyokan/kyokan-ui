import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Step = props => {
  const StyledStep = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledStep,
    null,
    props.children
  );
};

Step.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Step;