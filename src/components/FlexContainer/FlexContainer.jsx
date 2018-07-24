import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const FlexContainer = (props) => {
  const StyledFlexContainer = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledFlexContainer>
      {props.children}
    </StyledFlexContainer>
  );
};

FlexContainer.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default FlexContainer;
