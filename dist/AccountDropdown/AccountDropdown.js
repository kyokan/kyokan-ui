import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';
import Identity from '../Identity';

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

    this.renderIcon = () => {
      const StyledIcon = styled.span`
      color: rgb(108,128,160);
    `;

      return React.createElement(
        StyledIcon,
        null,
        React.createElement(Icon, {
          name: 'chevronDown',
          size: 'sm'
        })
      );
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
      text-align       : left;
      z-index          : 9999;

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
        React.createElement(Identity, {
          name: this.props.name,
          avatar: this.props.avatar,
          large: true,
          rounded: true,
          dark: true
        }),
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
  onItemClick: item => {},
  onToggleClick: isOpen => {}
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