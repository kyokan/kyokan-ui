import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An option within a TabbedRadioGroup.
*/
const TabbedRadioGroupOption = (props) => {
  const StyledTabbedRadioGroupOption = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledTabbedRadioGroupOption>
      {props.children}
    </StyledTabbedRadioGroupOption>
  );
};

TabbedRadioGroupOption.propTypes = {
  /** The icon that shows up to the left of the text */
  icon: PropTypes.string,

  /** The form value of the option */
  value: PropTypes.string.isRequired,

  /** The text that displays as the option */
  children: PropTypes.string.isRequired,

  /** Whether or not the component receives active styles */
  selected: PropTypes.bool,
};

/** @component */
export default TabbedRadioGroupOption;
