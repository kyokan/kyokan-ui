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
  constructor (props) {
    super(props);

    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex,
    };
  }

  handleTabListItemClick = (tabIndex) => {
    if (tabIndex !== this.state.activeTabIndex) {
      this.setState({
        activeTabIndex: tabIndex,
      });
    }
  }

  renderVerticalTabListItems = () => {
    return React.Children.map(this.props.children, (child, index) => {
      return (
        <TabbedSelectorOption
          onClick={() => {
            this.handleTabListItemClick(index);
          }}
          icon={child.props.icon}
        >
          {child.props.title}
        </TabbedSelectorOption>
      );
    })
  }

  renderVerticalTabList = () => {
    return (
      <TabbedSelector
        defaultSelectedIndex={this.state.activeTabIndex}
        onlyOne
      >
        {this.renderVerticalTabListItems()}
      </TabbedSelector>
    );
  }

  renderHorizontalTabList = () => {
    return (
      null
    );
  }

  renderActiveTabContent = () => {
    const children       = this.props.children;
    const activeTabIndex = this.state.activeTabIndex;

    if (children[activeTabIndex] && children[activeTabIndex].props) {
      return children[activeTabIndex].props.children;
    }
  }

  renderContent = () => {
    if (this.props.children && this.props.children.length) {
      if (this.props.children[0].type.name === 'VerticalTab') {
        return (
          <Grid>
            <Row>
              <Column md={4} lg={4} xl={4}>
                {this.renderVerticalTabList()}
              </Column>
              <Column md={8} lg={8} xl={4}>
                {this.renderActiveTabContent()}
              </Column>
            </Row>
          </Grid>
        );
      } else if (this.props.children[0].type.name === 'HorizontalTab') {
        return (
          <Grid>
            <Row>
              <Column>
                {this.renderHorizontalTabList()}
              </Column>
            </Row>
            <Row>
              <Column>
                {this.renderActiveTabContent()}
              </Column>
            </Row>
          </Grid>
        );
      }
    }
  }

  render () {
    const StyledTabs = styled.div`
      font-family : ${ ({ theme }) => theme.textFontFamily };
      color       : ${ ({ theme }) => theme.textColor };
    `;

    return (
      <StyledTabs>
        {this.renderContent()}
      </StyledTabs>
    );
  }
};

Tabs.defaultProps = {
  defaultActiveTabIndex: 0,
}

Tabs.propTypes = {
  /** A set of tab components to display */
  children: PropTypes.any.isRequired,

  /** A unique identifier for which of the tab components will be active */
  defaultActiveTabIndex: PropTypes.number,
};

/** @component */
export default Tabs;
