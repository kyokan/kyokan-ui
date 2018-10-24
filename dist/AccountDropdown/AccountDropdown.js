import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';

/**
* A module that allows the user to quickly access user/account-level options. For example: 'Sign Out', 'Settings', etc.
*/
class AccountDropdown extends Component {
  constructor(props) {
    super(props);

    this.handleToggleClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      }, () => {
        this.props.onToggleClick(this.state.isOpen);
      });
    };

    this.renderAvatar = () => {
      const StyledImage = styled.img`
      width         : 30px;
      height        : 30px;
      border-radius : 50%;
    `;

      const StyledPlaceholder = styled.div`
      width               : 30px;
      height              : 30px;
      background-color    : lightgray;
      border-radius       : 50%;
    `;

      if (this.props.avatar.length) {
        return React.createElement(StyledImage, {
          src: this.props.avatar
        });
      } else {
        return React.createElement(StyledPlaceholder, null);
      }
    };

    this.renderName = () => {
      const StyledAccountDropdownName = styled.span`
      display   : inline-block;
      margin    : 0 10px;
      color     : white;
      font-size : 15px;
    `;

      return React.createElement(
        StyledAccountDropdownName,
        null,
        this.props.name
      );
    };

    this.renderIcon = () => {
      return React.createElement(Icon, {
        name: 'chevronDown',
        size: 'sm'
      });
    };

    this.renderItems = () => {
      const StyledItems = styled.ul`
      position         : absolute;
      right            : 10px;
      top              : 30px;
      background-color : white;
      padding          : 5px 0;
      border-radius    : 5px;
      list-style       : none;

      li {
        line-height : 15px;
        padding     : 10px 20px;
        white-space : nowrap;

        &:hover {
          color            : black;
          background-color : lightgray;
        }
      }
    `;

      if (this.state.isOpen) {
        return React.createElement(
          StyledItems,
          null,
          this.props.items.map(item => {
            return React.createElement(
              'li',
              {
                key: item.text,
                onClick: () => {
                  this.props.onItemClick(item);

                  if (item.href) {
                    window.open(item.href, '_blank');
                  }
                }
              },
              item.text
            );
          })
        );
      }
    };

    this.state = {
      isOpen: false
    };
  }

  render() {
    const StyledAccountDropdown = styled.div`
      position    : relative;
      display     : inline-block;
      font-family : ${props => props.theme.textFontFamily};
      cursor      : pointer;
      padding     : 10px;
    `;

    const StyledToggle = styled.div`
      display         : flex;
      align-items     : center;
    `;

    return React.createElement(
      StyledAccountDropdown,
      null,
      React.createElement(
        StyledToggle,
        {
          onClick: this.handleToggleClick
        },
        this.renderAvatar(),
        this.renderName(),
        this.renderIcon()
      ),
      this.renderItems()
    );
  }
};

AccountDropdown.defaultProps = {
  avatar: '',
  items: [],
  name: 'User',
  onItemClick: () => {},
  onToggleClick: () => {}
};

AccountDropdown.propTypes = {
  /** A URL to the avatar image */
  avatar: PropTypes.string,

  /** The name of the user */
  name: PropTypes.string,

  /** The content in the dropdown */
  items: PropTypes.arrayOf(PropTypes.object),

  /** A callback function which is fired when an item is clicked */
  onItemClick: PropTypes.func,

  /** A callback function which is fired when the toggle is clicked (mainly useful for analytics)  */
  onToggleClick: PropTypes.func
};

/** @component */
export default AccountDropdown;