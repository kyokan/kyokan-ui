import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A collection of BountyListItem components.
*/
const BountyList = props => {
  const StyledBountyList = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(
    StyledBountyList,
    null,
    props.children
  );
};

BountyList.propTypes = {
  /** The BountyListItem components to be displayed by the bounty list */
  children: PropTypes.any
};

/** @component */
export default BountyList;