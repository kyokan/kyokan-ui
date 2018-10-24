import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A (multi-)select with options displayed as tabs.
*/
class TabbedSelector extends Component {
  constructor (props) {
    super(props);

    let indices = props.defaultSelectedIndices;
    if (props.onlyOne && props.defaultSelectedIndex !== null) {
      indices = [props.defaultSelectedIndex]
    }

    this.state = {
      selectedIndices : indices,
    };
  }

  handleOptionClick = (index) => {
    const state = {};

    if (this.props.onlyOne) {
      state.selectedIndices = [index];
    } else {
      if (this.state.selectedIndices.indexOf(index) !== -1) {
        // filter out from list
        state.selectedIndices = this.state.selectedIndices.filter((sIndex) => sIndex !== index);
      } else {
        // add to list
        state.selectedIndices = [
          ...this.state.selectedIndices,
          index,
        ];
      }
    }

    this.setState(state);
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        ...child.props,
        selected: (this.state.selectedIndices.indexOf(index) !== -1),
        vertical: this.props.vertical,
        onClick: () => {
          child.props && child.props.onClick && child.props.onClick();
          this.handleOptionClick(index);
        }
      });
    });
  }

  render () {
    const StyledTabbedSelector = styled.div`
      display : ${ (props) => this.props.vertical ? 'block' : 'flex' };

      font-family : ${ (props) => props.theme.textFontFamily };
      color       : ${ (props) => props.theme.textColor };

      border-radius : ${ (props) => this.props.vertical ? '3px' : '0' };

      user-select: none;

      // to show the rounded borders
      overflow: hidden;
    `;

    return (
      <StyledTabbedSelector>
        {this.renderChildren()}
      </StyledTabbedSelector>
    );
  }
};

TabbedSelector.defaultProps = {
  defaultSelectedIndex   : null,
  defaultSelectedIndices : [],
  onlyOne                : false,
  vertical               : false,
};

TabbedSelector.propTypes = {
  /** The options to be displayed */
  children: PropTypes.any.isRequired,

  /** The default selected option indices */
  defaultSelectedIndices: PropTypes.array,

  /** The default selected option indices */
  defaultSelectedIndex: PropTypes.number,

  /** Whether or not only one option can be selected */
  onlyOne: PropTypes.bool,

  /** Whether or not the options are shown vertically (in a column) */
  vertical: PropTypes.bool,
};

/** @component */
export default TabbedSelector;
