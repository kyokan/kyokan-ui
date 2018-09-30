import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An info icon which reveals a tooltip on hover.
*/
const InfoTooltip = (props) => {
  const StyledInfoTooltip = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledInfoTooltip>
      
    </StyledInfoTooltip>
  );
};

InfoTooltip.propTypes = {
  /** A string of text to display on tooltip hover */
  tooltipText: PropTypes.string.isRequired,
};

/** @component */
export default InfoTooltip;
