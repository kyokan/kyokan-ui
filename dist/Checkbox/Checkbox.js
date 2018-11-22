import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An input control that toggles state.
*/
const Checkbox = props => {
  const StyledCheckbox = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledCheckbox,
    null,
    props.children
  );
};

Checkbox.propTypes = {
  /** The label of the checkbox */
  children: PropTypes.any,

  /** Whether or not the checkbox is checked */
  checked: PropTypes.bool,

  /** The message to show on error */
  errorMessage: PropTypes.string,

  /** Fired on checkbox change */
  onChange: PropTypes.func
};

/** @component */
export default Checkbox;