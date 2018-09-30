import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const DMLAlgorithm = props => {
  const StyledDMLAlgorithm = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledDMLAlgorithm, null);
};

DMLAlgorithm.propTypes = {
  /** The title heading for the card */
  title: PropTypes.string,

  /** The description text to be displayed */
  description: PropTypes.string,

  /** A number representing the star rating */
  starRating: PropTypes.string,

  /** The url of the author's avatar to be displayed */
  authorAvatar: PropTypes.string,

  /** A string with the author's name */
  authorName: PropTypes.string,

  /** The value to displayed as the metric */
  metricValue: PropTypes.string,

  /** A number representing the price of the algorithm */
  tokenPrice: PropTypes.string
};

/** @component */
export default DMLAlgorithm;