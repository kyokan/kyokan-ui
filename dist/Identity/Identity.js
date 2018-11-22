import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../Box';

/**
* A representation of a user usually with an image and a name.
*/
const Identity = props => {
  const StyledIdentity = styled.div`
    display     : flex;
    align-items : center;
    color       : ${props.dark ? 'white' : 'black'};
    font-family : 'Barlow';
    font-size   : ${props.large ? '16px' : '13px'};
  `;

  const StyledPlaceholder = styled.div`
    width         : ${props.large ? '30px' : '15px'};
    height        : ${props.large ? '30px' : '15px'};
    background-color : lightgray;
    border-radius    : ${props.rounded ? '50%' : 'none'};
  `;

  const StyledImage = styled.img`
    width         : ${props.large ? '30px' : '15px'};
    height        : ${props.large ? '30px' : '15px'};
    border-radius : ${props.rounded ? '50%' : 'none'};
  `;

  const renderAvatar = () => {
    if (props.avatar.length) {
      return React.createElement(StyledImage, {
        src: props.avatar
      });
    } else {
      return React.createElement(StyledPlaceholder, null);
    }
  };

  return React.createElement(
    StyledIdentity,
    null,
    renderAvatar(),
    React.createElement(
      Box,
      { horizontalMargin: props.large ? 5 : 3 },
      props.name
    )
  );
};

Identity.defaultProps = {
  avatar: '',
  name: 'User',
  dark: false,
  large: false,
  rounded: false
};

Identity.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  dark: PropTypes.bool,
  large: PropTypes.bool,
  rounded: PropTypes.bool

  /** @component */
};export default Identity;