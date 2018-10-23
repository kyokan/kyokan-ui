import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const MAPPINGS = {
  addUser: 'iconUserPlus',
  award: 'iconAward',
  check: 'iconCheck',
  chevronDown: 'iconChevronDown',
  chevronUp: 'iconChevronUp',
  clipboard: 'iconClipboard',
  copy: 'iconCopy',
  plusCircle: 'iconPlusCircle',
  user: 'iconUserCircle',
  wallet: 'iconWallet'
};

/**
* Icon.
*/
const Icon = props => {
  let output = null;

  // if the icon string the user passed in is one that we support
  if (props.name && MAPPINGS.hasOwnProperty(props.name)) {
    if (typeof props.theme[MAPPINGS[props.name]] === 'function') {
      output = props.theme[MAPPINGS[props.name]](props.size);
    }
  }

  return output;
};

Icon.defaultProps = {
  size: 'lg'
};

Icon.propTypes = {
  /** The icon that shows up to the left of the text */
  name: PropTypes.string.isRequired,

  /** The icon that shows up to the left of the text */
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x'])
};

/** @component */
export default withTheme(Icon);