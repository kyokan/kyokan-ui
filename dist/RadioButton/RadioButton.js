import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An input control to select one of many options. Radio Buttons are usually part of a RadioGroup.
*/
const RadioButton = props => {
  const StyledRadioButton = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledRadioButton,
    null,
    props.children
  );
};

RadioButton.propTypes = {
  /** Whether or not the radio button is checked */
  checked: PropTypes.string,

  /** A unique identifier */
  id: PropTypes.string.isRequired,

  /** The label */
  children: PropTypes.any,

  /** Fired on radio button checked/unchecked */
  onChange: PropTypes.func
};

/** @component */
export default RadioButton;