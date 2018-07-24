import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TextArea = (props) => {
  const StyledTextArea = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTextArea>
      {props.children}
    </StyledTextArea>
  );
};

TextArea.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default TextArea;
