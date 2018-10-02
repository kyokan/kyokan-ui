import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function wrapFontAwesomeIcon (icon) {
  return (
    <FontAwesomeIcon icon={icon} />
  );
}

export default {
  check       : wrapFontAwesomeIcon(faCheck),
  chevronDown : wrapFontAwesomeIcon(faChevronDown),
  chevronUp   : wrapFontAwesomeIcon(faChevronUp),
}
