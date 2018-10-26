import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../Box';
import Icon from '../Icon';

/**
* A small module to show a metric next to an icon.
*/
const CountMetric = (props) => {
  const StyledCountMetric = styled.div`
    display: flex;
    align-items : center;
    font-family: 'Barlow';
    color: rgb(130, 149, 178);
    font-size: 15px;
  `;

  return (
    <StyledCountMetric>
      <Icon
        name={props.icon}
        size="lg"
      />
      <Box horizontalMargin={2}>
        {(props.metricValue > 1000) ? `${(props.metricValue / 1000).toFixed(1)}k`: props.metricValue}
      </Box>
    </StyledCountMetric>
  );
};

CountMetric.propTypes = {
  /** The number to be displayed */
  metricValue: PropTypes.number.isRequired,

  /** The icon to be displayed */
  icon: PropTypes.string.isRequired,
};

/** @component */
export default CountMetric;
