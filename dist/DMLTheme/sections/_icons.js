import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function wrapFontAwesomeIcon(icon) {
  return React.createElement(FontAwesomeIcon, { icon: icon });
}

export default {
  chevronDown: wrapFontAwesomeIcon(faChevronDown),
  chevronUp: wrapFontAwesomeIcon(faChevronUp)
};