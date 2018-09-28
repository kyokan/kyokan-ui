import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TabbedRadioGroupOption = (props) => {
  const StyledTabbedRadioGroupOption = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTabbedRadioGroupOption
      icon=""
      value=""
      isSelected=""
    >
      {props.children}
    </StyledTabbedRadioGroupOption>
  );
};

TabbedRadioGroupOption.propTypes = {
  /** The icon that shows up to the left of the text */
  icon: PropTypes.any,

  /** The form value of the option */
  value: PropTypes.any,

  /** The text that displays as the option */
  children: PropTypes.any,

  /** A boolean which triggers the application of active styles */
  isSelected: PropTypes.any,
};

/** @component */
export default TabbedRadioGroupOption;
