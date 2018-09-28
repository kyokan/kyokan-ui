import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Panel = props => {
  const StyledPanel = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledPanel,
    null,
    props.children
  );
};

Panel.propTypes = {
  /** Any content */
  children: PropTypes.any
};

/** @component */
export default Panel;