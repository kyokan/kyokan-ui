import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Slider = (props) => {
  const StyledSlider = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledSlider>
      {props.children}
    </StyledSlider>
  );
};

Slider.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Slider;
