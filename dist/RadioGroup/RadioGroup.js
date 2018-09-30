import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A set of RadioButtons which form a collection describing a set of related options. Only one RadioButton in a given group can be selected at a time.
*/
const RadioGroup = props => {
  const StyledRadioGroup = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledRadioGroup, null);
};

RadioGroup.propTypes = {
  /** Whether or not the radio button is checked */
  checked: PropTypes.string,

  /** The name */
  name: PropTypes.string.isRequired,

  /** Fired on radio group selection change */
  onChange: PropTypes.func
};

/** @component */
export default RadioGroup;