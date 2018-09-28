import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const AccountDropdown = (props) => {
  const StyledAccountDropdown = styled.div`
    fontFamily: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledAccountDropdown
      avatar=""
      name=""
    >
      {props.children}
    </StyledAccountDropdown>
  );
};

AccountDropdown.propTypes = {
  /** A URL to the avatar image */
  avatar: PropTypes.any,

  /** A string with the name of the user */
  name: PropTypes.any,

  /** The content in the dropdown */
  children: PropTypes.any,
};

/** @component */
export default AccountDropdown;
