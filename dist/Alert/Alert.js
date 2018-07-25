import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Alert = props => {
  const StyledAlert = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledAlert,
    null,
    props.children
  );
};

Alert.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Alert;