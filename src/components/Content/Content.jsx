import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Content = (props) => {
  const StyledContent = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledContent

    >
      {props.children}
    </StyledContent>
  );
};

Content.propTypes = {
  /** Any content */
  children: PropTypes.any,
};

/** @component */
export default Content;
