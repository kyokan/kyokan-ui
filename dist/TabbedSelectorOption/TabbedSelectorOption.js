import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';

/**
* An option within a TabbedSelector.
* **You should only use this component within a `TabbedSelector`.**
*/
const TabbedSelectorOption = props => {
  const StyledTabbedSelectorOption = styled.div`
    display: flex;
    align-items: center;

    font-family : ${props => props.theme.tabbedSelectorOptionFontFamily};
    color       : ${props => props.theme.tabbedSelectorOptionColor};

    border-left-width : 3px;
    border-left-style : solid;
    border-left-color : transparent;

    padding: 10px;

    cursor: pointer;

    &.selected {
      border-left-color: ${props => props.theme.tabbedSelectorOptionBorderColorSelected};

      .icon {
        color : ${props => props.theme.tabbedSelectorOptionIconColorSelected};
      }
    }

    &:hover {
      background-color: lightgray;
    }

    .icon {
      margin : 0 10px;
      color  : ${props => props.theme.tabbedSelectorOptionIconColor};
    }
  `;

  function renderIcon() {
    let output = null;

    if (props.icon) {
      output = React.createElement(
        'div',
        { className: 'icon' },
        React.createElement(Icon, {
          name: props.icon,
          size: '2x'
        })
      );
    }

    return output;
  }

  return React.createElement(
    StyledTabbedSelectorOption,
    {
      className: props.selected ? 'selected' : '',
      onClick: props.onClick
    },
    renderIcon(),
    props.children
  );
};

TabbedSelectorOption.defaultProps = {
  icon: null,
  onClick: () => {},
  selected: false
};

TabbedSelectorOption.propTypes = {
  /** The icon that shows up to the left of the text */
  icon: PropTypes.string,

  /** The text that displays as the option */
  children: PropTypes.string.isRequired,

  /** Whether or not the component receives active styles */
  selected: PropTypes.bool,

  /** A callback to fire on click. (**THIS IS PROVIDED BY `TabbedSelector`**) */
  onClick: PropTypes.func
};

/** @component */
export default TabbedSelectorOption;