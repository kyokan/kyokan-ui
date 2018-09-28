import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Checkbox = props => {
  const StyledCheckbox = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledCheckbox,
    {
      isChecked: '',
      errorMessage: ''
    },
    props.children
  );
};

Checkbox.propTypes = {
  /** The label of the checkbox */
  children: PropTypes.any,

  /** A boolean representing whether or not the checkbox is checked */
  isChecked: PropTypes.any,

  /** A string of error message */
  errorMessage: PropTypes.any
};

/** @component */
export default Checkbox;