import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const HorizontalTabGroup = props => {
  const StyledHorizontalTabGroup = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledHorizontalTabGroup,
    null,
    props.children
  );
};

HorizontalTabGroup.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default HorizontalTabGroup;