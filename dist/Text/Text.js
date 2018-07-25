import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* The most basic text style of the page.
*/
const Text = props => {
  const StyledText = styled.div`
    font-weight: bold;
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledText,
    null,
    props.children
  );
};

Text.propTypes = {
  /** The text to display */
  children: PropTypes.any.isRequired
};

/** @component */
export default Text;