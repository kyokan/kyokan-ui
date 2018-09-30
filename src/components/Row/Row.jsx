import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A layout component that encapsulates horizontal content.
*/
const Row = (props) => {
  const StyledRow = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledRow>
      {props.children}
    </StyledRow>
  );
};

Row.propTypes = {
  /** Any content */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Row;
