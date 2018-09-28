import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Description = (props) => {
  const StyledDescription = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledDescription

    >
      {props.children}
    </StyledDescription>
  );
};

Description.propTypes = {
  /** The description text to be displayed */
  children: PropTypes.any,
};

/** @component */
export default Description;
