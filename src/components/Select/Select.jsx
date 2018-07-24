import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Select = (props) => {
  const StyledSelect = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledSelect>
      {props.children}
    </StyledSelect>
  );
};

Select.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Select;
