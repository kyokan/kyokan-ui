import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import Icon from '../Icon';

const StyledAccordionContent = styled.div`
  background-color : ${ (props) => props.theme.accordionContentBackgroundColor };
  padding          : ${ (props) => props.theme.accordionContentPadding };
  color            : ${ (props) => props.theme.accordionContentColor };
  font-size        : ${ (props) => props.theme.accordionContentFontSize };

  &.closed {
    display: none;
  }
`;

/**
* A block element that hides and shows content below a header.
*
* **If you are not using an AccordionMenu and you want border collapsing with a list of accordions**, you should:
* * pass `first` for the first accordion of the list
* * pass `last` for the last accordion of the list
* * pass `middle` for all the other accordions of the list
*/
class Accordion extends Component {
  constructor (props) {
    super(props);

    this.state = {
      expanded: this.props.expanded,
    };
  }

  handleClick = (event) => {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded,
    }, () => {
      this.props.onChange(event, this.state.expanded);
    });
  }

  renderToggleIcon = () => {
    if (this.state.expanded) {
      return (
        <Icon
          name={this.props.expandedIcon}
        />
      );
    } else {
      return (
        <Icon
          name={this.props.closedIcon}
        />
      );
    }
  }

  render () {
    const StyledAccordion = styled.div`
      font-family                : ${ (props) => props.theme.accordionFontFamily };
      color                      : ${ (props) => props.theme.accordionColor };
      border-top-width           : ${ (props) => this.props.middle ? 0 : props.theme.accordionBorderWidth };
      border-right-width         : ${ (props) => props.theme.accordionBorderWidth };
      border-bottom-width        : ${ (props) => this.props.middle ? 0 : props.theme.accordionBorderWidth };
      border-left-width          : ${ (props) => props.theme.accordionBorderWidth };
      border-style               : ${ (props) => props.theme.accordionBorderStyle };
      border-color               : ${ (props) => props.theme.accordionBorderColor };
      border-top-left-radius     : ${ (props) => (this.props.middle || this.props.last)  ? 0 : props.theme.accordionBorderTopLeftRadius };
      border-top-right-radius    : ${ (props) => (this.props.middle || this.props.last)  ? 0 : props.theme.accordionBorderTopRightRadius };
      border-bottom-left-radius  : ${ (props) => (this.props.middle || this.props.first) ? 0 : props.theme.accordionBorderBottomLeftRadius };
      border-bottom-right-radius : ${ (props) => (this.props.middle || this.props.first) ? 0 : props.theme.accordionBorderBottomRightRadius };
    `;

    const StyledAccordionTitle = styled.div`
      background-color : ${ (props) => props.theme.accordionTitleBackgroundColor };
      color            : ${ (props) => this.state.expanded ? props.theme.accordionExpandedTitleColor : props.theme.accordionTitleColor };
      cursor           : ${ (props) => props.theme.accordionTitleHoverCursor };
      padding          : ${ (props) => props.theme.accordionTitlePadding };
      font-size        : ${ (props) => props.theme.accordionTitleFontSize };
      position         : relative;
      user-select      : none;

      .toggle {
        position : absolute;
        top      : ${ (props) => props.theme.accordionToggleIconTop };
        right    : ${ (props) => props.theme.accordionToggleIconRight };
        color    : ${ (props) => props.theme.accordionToggleIconColor };
      }
    `;

    return (
      <StyledAccordion>
        <StyledAccordionTitle
          onClick={this.handleClick}
        >
          {this.props.title}
          <div className="toggle">
            {this.renderToggleIcon()}
          </div>
        </StyledAccordionTitle>
        <StyledAccordionContent
          className={this.state.expanded ? '' : 'closed'}
        >
          {this.props.children}
        </StyledAccordionContent>
      </StyledAccordion>
    );
  }
}

Accordion.defaultProps = {
  closedIcon   : 'chevronDown',
  expanded     : false,
  expandedIcon : 'chevronUp',
  first        : false,
  last         : false,
  middle       : false,
  onChange     : (event, isExpanded) => {},
};

Accordion.propTypes = {
  /** The text shown on the toggle header */
  title: PropTypes.string.isRequired,

  /** The content revealed when the accordion is expanded */
  children: PropTypes.any.isRequired,

  /** Whether or not the accordion to be open by default */
  expanded: PropTypes.bool,

  /** Fired on accordion open/close */
  onChange: PropTypes.func,

  /** Whether or not the accordion is the first of a list */
  first: PropTypes.bool,

  /** Whether or not the accordion is the last of a list */
  last: PropTypes.bool,

  /** Whether or not the accordion is neither the first nor last of a list */
  middle: PropTypes.bool,

  /** The icon you want to use when accordion is expanded */
  expandedIcon: PropTypes.string,

  /** The icon you want to use when accordion is closed */
  closedIcon: PropTypes.string,
};

/** @component */
export default withTheme(Accordion);
