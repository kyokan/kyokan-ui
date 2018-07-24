import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const AccountDropdown = (props) => {
  const StyledAccountDropdown = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledAccountDropdown>
      {props.children}
    </StyledAccountDropdown>
  );
};

AccountDropdown.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default AccountDropdown;