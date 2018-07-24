import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Right = (props) => {
  const StyledRight = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledRight>
      {props.children}
    </StyledRight>
  );
};

Right.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Right;
