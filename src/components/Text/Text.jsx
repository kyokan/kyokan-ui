import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* Text.
*/
const Text = (props) => {
  const StyledText = styled.div`
    font-family:    ${ (props) => props.theme.textFontFamily };
    color:          ${ (props) => props.theme.textColor };
    font-weight:    ${ (props) => props.theme.textFontWeight };
    letter-spacing: ${ (props) => props.theme.textLetterSpacing };
    font-size:      ${ (props) => props.theme.textFontSize };
    line-height:    ${ (props) => props.theme.textLineHeight };
  `;

  return (
    <StyledText>
      {props.children}
    </StyledText>
  );
};

Text.propTypes = {
  /** Text to display */
  children: PropTypes.node.isRequired,
};

/** @component */
export default Text;
