import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const RadioButton = (props) => {
  const StyledRadioButton = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledRadioButton>
      {props.children}
    </StyledRadioButton>
  );
};

RadioButton.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default RadioButton;
