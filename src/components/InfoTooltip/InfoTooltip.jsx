import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const InfoTooltip = (props) => {
  const StyledInfoTooltip = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledInfoTooltip
      tooltipText=""
    >
      
    </StyledInfoTooltip>
  );
};

InfoTooltip.propTypes = {
  /** A string of text to display on tooltip hover */
  tooltipText: PropTypes.any,
};

/** @component */
export default InfoTooltip;
