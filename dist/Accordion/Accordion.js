import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Accordion = props => {
  const StyledAccordion = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledAccordion,
    null,
    props.children
  );
};

Accordion.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Accordion;