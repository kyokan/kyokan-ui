import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const MetricBox = (props) => {
  const StyledMetricBox = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledMetricBox>
      {props.children}
    </StyledMetricBox>
  );
};

MetricBox.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default MetricBox;
