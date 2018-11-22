import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const AvatarControl = props => {
  const StyledAvatarControl = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledAvatarControl, null);
};

AvatarControl.propTypes = {
  /** A URL to the avatar image */
  avatar: PropTypes.string
};

/** @component */
export default AvatarControl;