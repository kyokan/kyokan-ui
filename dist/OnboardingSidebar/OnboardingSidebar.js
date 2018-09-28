import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const OnboardingSidebar = props => {
  const StyledOnboardingSidebar = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledOnboardingSidebar, null);
};

OnboardingSidebar.propTypes = {};

/** @component */
export default OnboardingSidebar;