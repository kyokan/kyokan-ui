import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Column from '../Column';
import Grid from '../Grid';
import Row from '../Row';
import TabbedSelector from '../TabbedSelector';
import TabbedSelectorOption from '../TabbedSelectorOption';

/**
* A collection of tab components (either all `VerticalTab` or `HorizontalTab`).
*/
class Tabs extends Component {
  constructor(props) {
    super(props);

    this.handleTabListItemClick = tabIndex => {
      if (tabIndex !== this.state.activeTabIndex) {
        this.setState({
          activeTabIndex: tabIndex
        });
      }
    };

    this.renderVerticalTabListItems = () => {
      return React.Children.map(this.props.children, (child, index) => {
        return React.createElement(
          TabbedSelectorOption,
          {
            onClick: () => {
              this.handleTabListItemClick(index);
            },
            icon: child.props.icon
          },
          child.props.title
        );
      });
    };

    this.renderVerticalTabList = () => {
      return React.createElement(
        TabbedSelector,
        {
          defaultSelectedIndex: this.state.activeTabIndex,
          onlyOne: true
        },
        this.renderVerticalTabListItems()
      );
    };

    this.renderHorizontalTabList = () => {
      return null;
    };

    this.renderActiveTabContent = () => {
      const children = this.props.children;
      const activeTabIndex = this.state.activeTabIndex;

      if (children[activeTabIndex] && children[activeTabIndex].props) {
        return children[activeTabIndex].props.children;
      }
    };

    this.renderContent = () => {
      if (this.props.children && this.props.children.length) {
        if (this.props.children[0].type.name === 'VerticalTab') {
          return React.createElement(
            Grid,
            null,
            React.createElement(
              Row,
              null,
              React.createElement(
                Column,
                { md: 4, lg: 4, xl: 4 },
                this.renderVerticalTabList()
              ),
              React.createElement(
                Column,
                { md: 8, lg: 8, xl: 4 },
                this.renderActiveTabContent()
              )
            )
          );
        } else if (this.props.children[0].type.name === 'HorizontalTab') {
          return React.createElement(
            Grid,
            null,
            React.createElement(
              Row,
              null,
              React.createElement(
                Column,
                null,
                this.renderHorizontalTabList()
              )
            ),
            React.createElement(
              Row,
              null,
              React.createElement(
                Column,
                null,
                this.renderActiveTabContent()
              )
            )
          );
        }
      }
    };

    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
  }

  render() {
    const StyledTabs = styled.div`
      font-family : ${({ theme }) => theme.textFontFamily};
      color       : ${({ theme }) => theme.textColor};
    `;

    return React.createElement(
      StyledTabs,
      null,
      this.renderContent()
    );
  }
};

Tabs.defaultProps = {
  defaultActiveTabIndex: 0
};

Tabs.propTypes = {
  /** A set of tab components to display */
  children: PropTypes.any.isRequired,

  /** A unique identifier for which of the tab components will be active */
  defaultActiveTabIndex: PropTypes.number
};

/** @component */
export default Tabs;