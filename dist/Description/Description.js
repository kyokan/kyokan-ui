import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* Text that serves as a description.
*/
const Description = props => {
  const StyledDescription = styled.div`
    font-family: ${props => props.theme.descriptionFontFamily};
    color:       ${props => props.theme.descriptionTextColor};
    font-weight: ${props => props.theme.descriptionFontWeight};
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