import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import classnames from 'classnames';

/**
* A container that can be used to add padding and margin around components and background color styles.
*/
const Box = (props) => {
  const MAPPINGS = {
    0: props.theme.box0value,
    1: props.theme.box1value,
    2: props.theme.box2value,
    3: props.theme.box3value,
    4: props.theme.box4value,
    5: props.theme.box5value,
    6: props.theme.box6value,
    7: props.theme.box7value,
    8: props.theme.box8value,
    9: props.theme.box9value,
  };

  const generateDimensionString = (dimension) => {
    if (props[dimension]) {
      if (Number.isInteger(props[dimension])) {
        return `${dimension}: ${props[dimension]}px;`;
      } else {
        return `${dimension}: ${props[dimension]};`;
      }
    }
  };

  const generateMarginString = () => {
    const tokens = [];

    if (props.margin) {
      tokens.push(`margin: ${MAPPINGS[props.margin]};`);
    }

    if (props.horizontalMargin) {
      tokens.push(`margin-right: ${MAPPINGS[props.horizontalMargin]};`);
      tokens.push(`margin-left:  ${MAPPINGS[props.horizontalMargin]};`);
    }

    if (props.verticalMargin) {
      tokens.push(`margin-top:    ${MAPPINGS[props.verticalMargin]};`);
      tokens.push(`margin-bottom: ${MAPPINGS[props.verticalMargin]};`);
    }

    if (props.marginTop) {
      tokens.push(`margin-top: ${MAPPINGS[props.marginTop]};`);
    }

    if (props.marginRight) {
      tokens.push(`margin-right: ${MAPPINGS[props.marginRight]};`);
    }

    if (props.marginBottom) {
      tokens.push(`margin-bottom: ${MAPPINGS[props.marginBottom]};`);
    }

    if (props.marginLeft) {
      tokens.push(`margin-left: ${MAPPINGS[props.marginLeft]};`);
    }

    return tokens.join('\n');
  };

  const generatePaddingString = () => {
    const tokens = [];

    if (props.padding) {
      tokens.push(`padding: ${MAPPINGS[props.padding]};`);
    }

    if (props.horizontalPadding) {
      tokens.push(`padding-right: ${MAPPINGS[props.horizontalPadding]};`);
      tokens.push(`padding-left:  ${MAPPINGS[props.horizontalPadding]};`);
    }

    if (props.verticalPadding) {
      tokens.push(`padding-top:    ${MAPPINGS[props.verticalPadding]};`);
      tokens.push(`padding-bottom: ${MAPPINGS[props.verticalPadding]};`);
    }

    if (props.paddingTop) {
      tokens.push(`padding-top: ${MAPPINGS[props.paddingTop]};`);
    }

    if (props.paddingRight) {
      tokens.push(`padding-right: ${MAPPINGS[props.paddingRight]};`);
    }

    if (props.paddingBottom) {
      tokens.push(`padding-bottom: ${MAPPINGS[props.paddingBottom]};`);
    }

    if (props.paddingLeft) {
      tokens.push(`padding-left: ${MAPPINGS[props.paddingLeft]};`);
    }

    return tokens.join('\n');
  };

  const StyledBox = styled.div`
    ${ generateDimensionString('width') };
    ${ generateDimensionString('height') };

    ${ generateMarginString() };
    ${ generatePaddingString() };

    &.center-content {
      text-align: center;
    }

    &.light {
      background-color : ${ ({theme}) => theme.boxBackgroundColorLight };
      color            : ${ ({theme}) => theme.boxColorLight };
    }

    &.dark {
      background-color : ${ ({theme}) => theme.boxBackgroundColorDark };
      color            : ${ ({theme}) => theme.boxColorDark };
    }

    &.highlight {
      background-color : ${ ({theme}) => theme.boxBackgroundColorHighlight };
      color            : ${ ({theme}) => theme.boxColorHighlight };
    }

    &.rounded {
      border-radius : ${ ({theme}) => theme.boxBorderRadiusRounded };
      overflow: hidden;
    }
  `;

  const classes = classnames({
    dark             : props.dark,
    light            : props.light,
    highlight        : props.highlight,
    rounded          : props.rounded,
    'center-content' : props.centerContent,
  })

  return (
    <StyledBox
      className={classes}
    >
      {props.children}
    </StyledBox>
  );
};

Box.defaultProps = {
  padding           : 0,
  margin            : 0,
  verticalPadding   : 0,
  horizontalPadding : 0,
  verticalMargin    : 0,
  horizontalMargin  : 0,
  paddingTop        : 0,
  paddingRight      : 0,
  paddingBottom     : 0,
  paddingLeft       : 0,
  marginTop         : 0,
  marginRight       : 0,
  marginBottom      : 0,
  marginLeft        : 0,
  dark              : false,
  light             : false,
  highlight         : false,
  centerContent     : false,
  rounded           : false,
}

Box.propTypes = {
  /** Any content to wrap */
  children: PropTypes.node.isRequired,

  /** Padding level */
  padding: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Margin level */
  margin: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Padding-top and padding-bottom level */
  verticalPadding: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Padding-right and padding-left level */
  horizontalPadding: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Margin-top and margin-bottom level */
  verticalMargin: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Margin-right and margin-left level */
  horizontalMargin: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Padding-top level */
  paddingTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Padding-right level */
  paddingRight: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Padding-bottom level */
  paddingBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Padding-left level */
  paddingLeft: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Margin-top level */
  marginTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Margin-right level */
  marginRight: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Margin-bottom level */
  marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Margin-left level */
  marginLeft: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),

  /** Whether or not the box's background color should be the dark color */
  dark: PropTypes.bool,

  /** Whether or not the box's background color should be the light color */
  light: PropTypes.bool,

  /** Whether or not the box's background color should be the highlight color */
  highlight: PropTypes.bool,

  /** Whether or not the box's content should be centered */
  centerContent: PropTypes.bool,

  /** Whether or not the box's border should be rounded */
  rounded: PropTypes.bool,

  /** The fixed width of the box (can either be an integer for pixes or a string for any CSS dimension) */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The fixed height of the box (can either be an integer for pixes or a string for any CSS dimension) */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

/** @component */
export default withTheme(Box);
