import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortID from 'shortid';

import Button from '../Button';
import TextInput from '../TextInput';

const StyledInputButton = styled.div`
  display                    : inline-flex;
  overflow                   : hidden;
  border-top-right-radius    : 3px;
  border-bottom-right-radius : 3px;
`;

const StyledContainer = styled.div`
  margin-left : -75px;
  margin-top  : -1px;
  height      : 38px;
`;

/**
* An input field with a joined submit button.
*/
const InputButton = (props) => {

  return (
    <StyledInputButton>
      <TextInput
        id={props.inputId}
        placeholder={props.placeholder}
      />
      <StyledContainer>
        <Button
          onClick={(event) => {
            const value = document.getElementById(props.inputId).value;
            props.onClick(value, event);
          }}
          unrounded
        >
          {props.buttonText}
        </Button>
      </StyledContainer>
    </StyledInputButton>
  );
};

InputButton.defaultProps = {
  inputId : shortID.generate(),
  onClick : (value, event) => {},
}

InputButton.propTypes = {
  /** The button text */
  buttonText: PropTypes.string.isRequired,

  /** A callback function to fire on button click */
  onClick: PropTypes.func,

  /** An ID for the input (to get the value) */
  inputId: PropTypes.string.isRequired,
};

/** @component */
export default InputButton;
