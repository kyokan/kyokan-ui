import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const MultiSelect = (props) => {
  const StyledMultiSelect = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledMultiSelect

    >
      
    </StyledMultiSelect>
  );
};

MultiSelect.propTypes = {

};

/** @component */
export default MultiSelect;
