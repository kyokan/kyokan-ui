import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A radio group that is displayed as vertical tabs.
*/
const TabbedRadioGroup = props => {
  const StyledTabbedRadioGroup = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledTabbedRadioGroup,
    null,
    props.children
  );
};

TabbedRadioGroup.propTypes = {
  /** The tabs to be displayed */
  children: PropTypes.any.isRequired,

  /** A unique identifier for which of the tabs will be active */
  activeKey: PropTypes.string
};

/** @component */
export default TabbedRadioGroup;