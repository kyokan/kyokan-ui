import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const VerticalTabGroup = (props) => {
  const StyledVerticalTabGroup = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledVerticalTabGroup>
      {props.children}
    </StyledVerticalTabGroup>
  );
};

VerticalTabGroup.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default VerticalTabGroup;
