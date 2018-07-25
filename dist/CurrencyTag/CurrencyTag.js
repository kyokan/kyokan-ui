import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const CurrencyTag = props => {
  const StyledCurrencyTag = styled.div`
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(
    StyledCurrencyTag,
    null,
    props.children
  );
};

CurrencyTag.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired
};

/** @component */
export default CurrencyTag;