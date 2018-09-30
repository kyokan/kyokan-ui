import React from 'react';
import styled from 'styled-components';

/**
* [Description]
*/
const OnboardingSidebar = (props) => {
  const StyledOnboardingSidebar = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledOnboardingSidebar>
      
    </StyledOnboardingSidebar>
  );
};

OnboardingSidebar.propTypes = {

};

/** @component */
export default OnboardingSidebar;
