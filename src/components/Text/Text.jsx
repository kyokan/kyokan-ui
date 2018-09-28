import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Text = (props) => {
  const StyledText = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledText

    >
      {props.children}
    </StyledText>
  );
};

Text.propTypes = {
  /** The text to encapsulate */
  children: PropTypes.any,
};

/** @component */
export default Text;
