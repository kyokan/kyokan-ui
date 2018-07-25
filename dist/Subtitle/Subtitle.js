import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Subtitle = props => {
  const StyledSubtitle = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledSubtitle,
    null,
    props.children
  );
};

Subtitle.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default Subtitle;