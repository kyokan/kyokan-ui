import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const TabbedRadioGroup = (props) => {
  const StyledTabbedRadioGroup = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledTabbedRadioGroup
      activeKey=""
    >
      {props.children}
    </StyledTabbedRadioGroup>
  );
};

TabbedRadioGroup.propTypes = {
  /** The tabs to be displayed */
  children: PropTypes.any,

  /** A string which stores which tab is selected */
  activeKey: PropTypes.any,
};

/** @component */
export default TabbedRadioGroup;
