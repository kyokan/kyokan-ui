import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Title = (props) => {
  const StyledTitle = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTitle

    >
      {props.children}
    </StyledTitle>
  );
};

Title.propTypes = {
  /** The text to be displayed */
  children: PropTypes.any,
};

/** @component */
export default Title;
