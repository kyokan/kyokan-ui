import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const MultiSelect = props => {
  const StyledMultiSelect = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledMultiSelect, null);
};

MultiSelect.propTypes = {};

/** @component */
export default MultiSelect;