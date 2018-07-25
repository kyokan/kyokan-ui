import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Center = props => {
  const StyledCenter = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledCenter,
    null,
    props.children
  );
};

Center.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Center;