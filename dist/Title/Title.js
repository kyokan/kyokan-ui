import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Title = props => {
  const StyledTitle = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledTitle,
    null,
    props.children
  );
};

Title.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Title;