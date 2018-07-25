import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Input = props => {
  const StyledInput = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledInput,
    null,
    props.children
  );
};

Input.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Input;