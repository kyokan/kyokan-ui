import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Container = (props) => {
  const StyledContainer = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledContainer

    >
      {props.children}
    </StyledContainer>
  );
};

Container.propTypes = {
  /** Any content */
  children: PropTypes.any,
};

/** @component */
export default Container;
