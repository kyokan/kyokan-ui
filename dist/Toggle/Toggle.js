import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Toggle = props => {
  const StyledToggle = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledToggle,
    null,
    props.children
  );
};

Toggle.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Toggle;