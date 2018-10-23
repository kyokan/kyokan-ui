import React from 'react';
import { Hidden as RGSHidden } from 'react-grid-system';

/**
* A wrapper around React Grid System's Hidden utility (https://jsxmachina.github.io/react-grid-system/#hidden).
*/
const Hidden = (props) => {
  return (
    <RGSHidden
      {...props}
    >
    </RGSHidden>
  );
};

/** @component */
export default Hidden;
