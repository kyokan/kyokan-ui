import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const AvatarControl = (props) => {
  const StyledAvatarControl = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledAvatarControl
      avatar=""
    >

    </StyledAvatarControl>
  );
};

AvatarControl.propTypes = {
  /** A URL to the avatar image */
  avatar: PropTypes.any,
};

/** @component */
export default AvatarControl;
