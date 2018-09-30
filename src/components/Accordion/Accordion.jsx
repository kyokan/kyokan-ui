import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A block element that hides and shows content below a header.
*/
const Accordion = (props) => {
  const StyledAccordion = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledAccordion>
      {props.children}
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  /** The text shown on the toggle header */
  title: PropTypes.string.isRequired,

  /** The content revealed when the accordion is expanded */
  children: PropTypes.any.isRequired,

  /** Whether or not the accordion to be open by default */
  expanded: PropTypes.bool,

  /** Fired on accordion open/close */
  onChange: PropTypes.func,
};

/** @component */
export default Accordion;
