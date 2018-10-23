import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faCheck,
  faChevronDown,
  faChevronUp,
  faClipboard,
  faCopy,
  faPlusCircle,
  faUserCircle,
  faUserPlus,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

function wrapFontAwesomeIcon (icon, size) {
  return (
    // https://github.com/FortAwesome/react-fontawesome#features
    <FontAwesomeIcon
      icon={icon}
      size={size}
      fixedWidth
    />
  );
}

export default {
  award       : (size) => wrapFontAwesomeIcon(faAward, size),
  check       : (size) => wrapFontAwesomeIcon(faCheck, size),
  chevronDown : (size) => wrapFontAwesomeIcon(faChevronDown, size),
  chevronUp   : (size) => wrapFontAwesomeIcon(faChevronUp, size),
  clipboard   : (size) => wrapFontAwesomeIcon(faClipboard, size),
  copy        : (size) => wrapFontAwesomeIcon(faCopy, size),
  plusCircle  : (size) => wrapFontAwesomeIcon(faPlusCircle, size),
  userCircle  : (size) => wrapFontAwesomeIcon(faUserCircle, size),
  userPlus    : (size) => wrapFontAwesomeIcon(faUserPlus, size),
  wallet      : (size) => wrapFontAwesomeIcon(faWallet, size),
}
