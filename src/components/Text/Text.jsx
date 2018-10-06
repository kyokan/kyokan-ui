import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import classnames from 'classnames';

/**
* Text.
*/
const Text = (props) => {
  const StyledText = styled.div`
    font-family    : ${ (props) => props.theme.textFontFamily };
    color          : ${ (props) => props.theme.textColor };
    font-weight    : ${ (props) => props.theme.textFontWeight };
    letter-spacing : ${ (props) => props.theme.textLetterSpacing };
    font-size      : ${ (props) => props.theme.textFontSize };
    line-height    : ${ (props) => props.theme.textLineHeight };

    &.dark {
      color : ${ (props) => props.theme.textDarkColor };
    }
  `;

  const classes = classnames({
    dark: props.dark,
  })

  return (
    <StyledText
      className={classes}
    >
      {props.children}
    </StyledText>
  );
};

Text.defaultProps = {
  dark: false,
}

Text.propTypes = {
  /** Text to display */
  children: PropTypes.node.isRequired,

  /** Whether or not the text should have dark styles */
  dark: PropTypes.bool,
};

/** @component */
export default Text;
