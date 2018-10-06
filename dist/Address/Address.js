import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An address.
*/
const Address = props => {
  const StyledAddress = styled.div`
    font-family : ${props => props.theme.textFontFamily};
    color       : ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledAddress,
    null,
    props.value
  );
};

Address.propTypes = {
  /** The address */
  value: PropTypes.string.isRequired,

  /** A callback function to fire on click */
  onClick: PropTypes.func
};

/** @component */
export default Address;