import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Line = (props) => {
  const StyledLine = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledLine>
      {props.children}
    </StyledLine>
  );
};

Line.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Line;
