import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* Text.
*/
const Text = props => {
  const StyledText = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledText,
    null,
    props.children
  );
};

Text.propTypes = {
  /** Text to display */
  children: PropTypes.string
};

/** @component */
export default Text;