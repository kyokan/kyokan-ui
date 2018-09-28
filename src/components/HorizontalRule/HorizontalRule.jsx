import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const HorizontalRule = (props) => {
  const StyledHorizontalRule = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledHorizontalRule

    >

    </StyledHorizontalRule>
  );
};

HorizontalRule.propTypes = {

};

/** @component */
export default HorizontalRule;
