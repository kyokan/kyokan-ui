import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const DMLAlgorithm = props => {
  const StyledDMLAlgorithm = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledDMLAlgorithm, {
    title: '',
    description: '',
    starRating: '',
    authorAvatar: '',
    authorName: '',
    metricValue: '',
    tokenPrice: ''
  });
};

DMLAlgorithm.propTypes = {
  /** The title heading for the card */
  title: PropTypes.any,

  /** The description text to be displayed */
  description: PropTypes.any,

  /** A number representing the star rating */
  starRating: PropTypes.any,

  /** The url of the author's avatar to be displayed */
  authorAvatar: PropTypes.any,

  /** A string with the author's name */
  authorName: PropTypes.any,

  /** The value to displayed as the metric */
  metricValue: PropTypes.any,

  /** A number representing the price of the algorithm */
  tokenPrice: PropTypes.any
};

/** @component */
export default DMLAlgorithm;