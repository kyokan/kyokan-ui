import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A layout component that encapsulates content.
*/
const Container = (props) => {
  const StyledContainer = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  );
};

Container.propTypes = {
  /** Any content */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Container;
