import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const CountMetric = props => {
  const StyledCountMetric = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledCountMetric, {
    metricValue: '',
    icon: ''
  });
};

CountMetric.propTypes = {
  /** The number to be displayed */
  metricValue: PropTypes.any,

  /** A string representing the icon to be displayed */
  icon: PropTypes.any
};

/** @component */
export default CountMetric;