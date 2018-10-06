import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';

/**
* An option within a TabbedSelector.
* **You should only use this component within a `TabbedSelector`.**
*/
const TabbedSelectorOption = (props) => {
  const StyledTabbedSelectorOption = styled.div`
    display: flex;
    align-items: center;

    font-family : ${ (props) => props.theme.tabbedSelectorOptionFontFamily };
    color       : ${ (props) => props.theme.tabbedSelectorOptionColor };

    border-left-width : 4px;
    border-left-style : solid;
    border-left-color : transparent;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: lightgray;

    padding: 14px;

    cursor: pointer;

    &.selected {
      border-left-color: ${ (props) => props.theme.tabbedSelectorOptionBorderColorSelected };

      .icon {
        color : ${ (props) => props.theme.tabbedSelectorOptionIconColorSelected };
      }
    }

    &:hover {
      background-color: lightgray;
    }

    .icon {
      margin : 0 10px;
      color  : ${ (props) => props.theme.tabbedSelectorOptionIconColor };
    }
  `;

  function renderIcon () {
    let output = null;

    if (props.icon) {
      output = (
        <div className="icon">
          <Icon
            name={props.icon}
            size="2x"
          />
        </div>
      );
    }

    return output;
  }

  return (
    <StyledTabbedSelectorOption
      className={props.selected ? 'selected' : ''}
      onClick={props.onClick}
    >
      {renderIcon()}
      {props.children}
    </StyledTabbedSelectorOption>
  );
};

TabbedSelectorOption.defaultProps = {
  icon     : null,
  onClick  : () => {},
  selected : false,
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
};

/** @component */
export default TabbedSelectorOption;
