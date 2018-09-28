import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const BountyListItem = props => {
  const StyledBountyListItem = styled.div`
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.primaryColor};
  `;

  return React.createElement(StyledBountyListItem, {
    title: '',
    description: '',
    isSubmitted: '',
    submissionCloseDate: '',
    metricValue: '',
    authorName: '',
    authorAvatar: ''
  });
};

BountyListItem.propTypes = {
  /** The text shown on the item header */
  title: PropTypes.any,

  /** The description text to be displayed */
  description: PropTypes.any,

  /** A boolean that allows submission information to be displayed by default */
  isSubmitted: PropTypes.any,

  /** The date that a submission closes - the color of the status is determined by proximity to today's date */
  submissionCloseDate: PropTypes.any,

  /** A number that is shown as the metric */
  metricValue: PropTypes.any,

  /** A string with the author's name */
  authorName: PropTypes.any,

  /** A string with the URL to the author's avatar */
  authorAvatar: PropTypes.any
};

/** @component */
export default BountyListItem;