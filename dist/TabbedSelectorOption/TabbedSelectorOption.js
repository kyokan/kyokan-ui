import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

import Icon from '../Icon';

/**
* An option within a TabbedSelector.
* **You should only use this component within a `TabbedSelector`.**
*/
const TabbedSelectorOption = props => {
  const StyledTabbedSelectorOption = styled.div`
    display: flex;
    align-items: center;

    font-family : ${({ theme }) => theme.tabbedSelectorOptionFontFamily};
    color       : ${({ theme }) => theme.tabbedSelectorOptionColor};

    padding: 14px;

    cursor: pointer;

    &.vertical {
      border-left-width : 4px;
      border-left-style : solid;
      border-left-color : transparent;

      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: lightgray;

      &.selected {
        border-left-color: ${({ theme }) => theme.tabbedSelectorOptionBorderColorSelected};
      }
    }

    &.horizontal {
      border-bottom-width: 4px;
      border-bottom-style: solid;
      border-bottom-color: lightgray;

      &.selected {
        border-bottom-color: ${({ theme }) => theme.tabbedSelectorOptionBorderColorSelected};
      }
    }

    &.selected {
      .icon {
        color : ${({ theme }) => theme.tabbedSelectorOptionIconColorSelected};
      }
    }

    &:hover {
      background-color: lightgray;
    }

    .icon {
      margin : 0 10px;
      color  : ${({ theme }) => theme.tabbedSelectorOptionIconColor};
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

  const classes = classnames({
    horizontal: !props.vertical,
    selected: props.selected,
    vertical: props.vertical
  });

  return React.createElement(
    StyledTabbedSelectorOption,
    {
      className: classes,
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
  /** The text that displays as the option */
  children: PropTypes.string.isRequired,

  /** The icon that shows up to the left of the text */
  icon: PropTypes.string,

  /** A callback to fire on click. (**THIS IS PROVIDED BY `TabbedSelector`**) */
  onClick: PropTypes.func,

  /** Whether or not the component receives active styles */
  selected: PropTypes.bool,

  /** Whether or not this option is in a vertical selector (**THIS IS PROVIDED BY `TabbedSelector`**) */
  vertical: PropTypes.bool
};

/** @component */
export default TabbedSelectorOption;