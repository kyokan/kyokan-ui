import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const UserTagline = (props) => {
  const StyledUserTagline = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledUserTagline>
      {props.children}
    </StyledUserTagline>
  );
};

UserTagline.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default UserTagline;
