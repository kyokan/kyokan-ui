import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const OnboardingSidebar = (props) => {
  const StyledOnboardingSidebar = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledOnboardingSidebar

    >
      
    </StyledOnboardingSidebar>
  );
};

OnboardingSidebar.propTypes = {

};

/** @component */
export default OnboardingSidebar;
