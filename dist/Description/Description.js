import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* Text that serves as a description.
*/
const Description = props => {
  const StyledDescription = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.descriptionTextColor};
    font-weight: 100;
    line-height: 1.8rem;
  `;

  return React.createElement(
    StyledDescription,
    null,
    props.children
  );
};

Description.propTypes = {
  /** The description text to be displayed */
  children: PropTypes.string.isRequired
};

/** @component */
export default Description;