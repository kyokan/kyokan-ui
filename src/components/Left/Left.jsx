import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Left = (props) => {
  const StyledLeft = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledLeft>
      {props.children}
    </StyledLeft>
  );
};

Left.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Left;
