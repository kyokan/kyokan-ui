import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Button = props => {
  const StyledButton = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledButton,
    null,
    props.children
  );
};

Button.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Button;