import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Panel = (props) => {
  const StyledPanel = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledPanel

    >
      {props.children}
    </StyledPanel>
  );
};

Panel.propTypes = {
  /** Any content */
  children: PropTypes.any,
};

/** @component */
export default Panel;
