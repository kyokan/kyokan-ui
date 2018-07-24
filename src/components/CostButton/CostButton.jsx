import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const CostButton = (props) => {
  const StyledCostButton = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledCostButton>
      {props.children}
    </StyledCostButton>
  );
};

CostButton.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default CostButton;
