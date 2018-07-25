import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Pill = props => {
  const StyledPill = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledPill,
    null,
    props.children
  );
};

Pill.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Pill;