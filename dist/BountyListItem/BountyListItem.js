import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A bounty entity.
*/
const BountyListItem = props => {
  const StyledBountyListItem = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledBountyListItem, null);
};

BountyListItem.propTypes = {
  /** The text shown on the item header */
  title: PropTypes.string,

  /** The description text to be displayed */
  description: PropTypes.string,

  /** A boolean that allows submission information to be displayed by default */
  submitted: PropTypes.bool,

  /** The date that a submission closes - the color of the status is determined by proximity to today's date */
  submissionCloseDate: PropTypes.string,

  /** A number that is shown as the metric */
  metricValue: PropTypes.number,

  /** A string with the author's name */
  authorName: PropTypes.string,

  /** A string with the URL to the author's avatar */
  authorAvatar: PropTypes.string
};

/** @component */
export default BountyListItem;