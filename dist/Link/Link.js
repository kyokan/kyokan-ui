import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An anchor link. Supports either an 'href', an 'onClick' callback, or both.
*/
const Link = props => {
  const StyledLink = styled.a`
    font-family     : ${({ theme }) => theme.linkFontFamily};
    color           : ${({ theme }) => theme.linkColor};
    cursor          : pointer;
    text-decoration : none;

    &:hover {
      color : ${({ theme }) => theme.linkHoverColor};
    }

    &:active{
      color : ${({ theme }) => theme.linkActiveColor};
    }
  `;

  return React.createElement(
    StyledLink,
    {
      href: props.href,
      target: props.target,
      title: props.title || props.children,
      onClick: () => {
        props.onClick && props.onClick();
      }
    },
    props.children
  );
};

Link.propTypes = {
  onClick: () => {},
  href: '#',
  title: '',
  target: '_self'
};

Link.propTypes = {
  /** A string of link text */
  children: PropTypes.string.isRequired,

  /** A callback function to fire on Link click */
  onClick: PropTypes.func,

  /** A string with a URL to go to on click */
  href: PropTypes.string,

  /** Defines the title of a link, which appears to the user as a tooltip */
  title: PropTypes.string,

  /** Defines where the link will be opened: '_blank', '_self', '_parent', '_top', or the name of a frame */
  target: PropTypes.string
};

/** @component */
export default Link;