import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Checkbox = (props) => {
  const StyledCheckbox = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledCheckbox>
      {props.children}
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Checkbox;
