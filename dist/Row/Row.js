import React from 'react';
import PropTypes from 'prop-types';

import { Row as RFRow } from 'react-flexbox-grid';

/**
* A layout row component (currently a wrapper around https://github.com/roylee0704/react-flexbox-grid/blob/master/src/components/Row.js).
*/
const Row = props => {
  return React.createElement(
    RFRow,
    {
      reverse: props.reverse,

      start: props.start,
      center: props.center,
      end: props.end,
      top: props.top,
      middle: props.middle,
      bottom: props.bottom,

      around: props.around,
      between: props.between,

      className: props.className,
      tagName: props.tagName
    },
    props.children
  );
};

Row.propTypes = {
  /* Reverses columns */
  reverse: PropTypes.bool,

  /* Aligns elements to the start of a row */
  start: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /* Aligns elements to the center of a row */
  center: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /* Aligns elements to the end of a row */
  end: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /* Aligns elements to the top of a row */
  top: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /* Aligns elements to the middle of a row */
  middle: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /* Aligns elements to the bottom of a row */
  bottom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /* Distributes the contents of a row or column around */
  around: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /* Distributes the contents of a row or column between */
  between: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /** A classname to add to the element */
  className: PropTypes.string,

  /** The tagname that you wish the component to render */
  tagName: PropTypes.string,

  /** Any content */
  children: PropTypes.node
};

/** @component */
export default Row;