import React from 'react';
import PropTypes from 'prop-types';

import { Col as RFCol } from 'react-flexbox-grid';

/**
* A layout column component (currently a wrapper around https://github.com/roylee0704/react-flexbox-grid/blob/master/src/components/Col.js).
*/
const Column = props => {
  return React.createElement(
    RFCol,
    {
      className: props.className,
      tagName: props.tagName,

      xs: props.xs,
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,

      xsOffset: props.xsOffset,
      smOffset: props.smOffset,
      mdOffset: props.mdOffset,
      lgOffset: props.lgOffset,
      xlOffset: props.xlOffset,

      first: props.first,
      last: props.last
    },
    props.children
  );
};

Column.propTypes = {
  /** Any content */
  children: PropTypes.node.isRequired,

  /** The number of columns used for the extra-small width */
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /** The number of columns used for the small width */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /** The number of columns used for the medium width */
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /** The number of columns used for the large width */
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /** The number of columns used for the small width */
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

  /** The number of columns used as the extra-small offset */
  xsOffset: PropTypes.number,

  /** The number of columns used as the small offset */
  smOffset: PropTypes.number,

  /** The number of columns used as the medium offset */
  mdOffset: PropTypes.number,

  /** The number of columns used as the large offset */
  lgOffset: PropTypes.number,

  /** The number of columns used as the extra-large offset */
  xlOffset: PropTypes.number,

  /** Reorders column to be the first */
  first: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /** Reorders column to be the last */
  last: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /** A classname to add to the element */
  className: PropTypes.string,

  /** The tagname that you wish the component to render */
  tagName: PropTypes.string
};

/** @component */
export default Column;