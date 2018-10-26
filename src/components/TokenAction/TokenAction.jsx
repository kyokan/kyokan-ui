import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../Box';
import Button from '../Button';
import TokenAmount from '../TokenAmount';

/**
* A composed component of a TokenAmount and a Button.
*/
const TokenAction = (props) => {
  const StyledTokenAction = styled.div`
    display         : inline-flex;
    justify-content : center;
    align-items     : center;
    flex-direction  : column;
    border          : 1px solid rgb(227, 233, 242);
    border-radius   : 5px;
    overflow        : hidden;
  `;

  return (
    <StyledTokenAction>
      <Box padding={2}>
        <TokenAmount
          amount={props.amount}
          token={props.token}
        />
      </Box>
      <Button
        onClick={props.onClick}
        unrounded
      >
        {props.buttonText}
      </Button>
    </StyledTokenAction>
  );
};

TokenAction.propTypes = {
  /** The amount */
  amount: PropTypes.number.isRequired,

  /** The name of the token */
  token: PropTypes.string.isRequired,

  /** Text to show as the button text */
  buttonText: PropTypes.string.isRequired,

  /** A callback function to fire on button click */
  onClick: PropTypes.func,
};

/** @component */
export default TokenAction;
