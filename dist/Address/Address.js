import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Address = props => {
  const StyledAddress = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledAddress, {
    value: '',
    onClick: ''
  });
};

Address.propTypes = {
  /** A string with the address */
  value: PropTypes.any,

  /** A callback function to fire on click */
  onClick: PropTypes.any
};

/** @component */
export default Address;