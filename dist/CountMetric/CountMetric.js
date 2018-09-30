import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A small module to show a metric next to an icon.
*/
const CountMetric = props => {
  const StyledCountMetric = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledCountMetric, null);
};

CountMetric.propTypes = {
  /** The number to be displayed */
  metricValue: PropTypes.number,

  /** The icon to be displayed */
  icon: PropTypes.string
};

/** @component */
export default CountMetric;