import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Tooltip = (props) => {
  const StyledTooltip = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTooltip>
      {props.children}
    </StyledTooltip>
  );
};

Tooltip.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Tooltip;