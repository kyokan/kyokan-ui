import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Accordion = (props) => {
  const StyledAccordion = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledAccordion
      title=""
      isExpanded=""
    >
      {props.children}
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  /** The text shown on the toggle header */
  title: PropTypes.any,

  /** The content revealed when the accordion is expanded */
  children: PropTypes.any,

  /** A boolean that allows an accordion to be open by default */
  isExpanded: PropTypes.any,
};

/** @component */
export default Accordion;
