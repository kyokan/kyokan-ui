import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const BountyList = (props) => {
  const StyledBountyList = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledBountyList

    >
      {props.children}
    </StyledBountyList>
  );
};

BountyList.propTypes = {
  /** The items to be displayed by the bounty list */
  children: PropTypes.any,
};

/** @component */
export default BountyList;
