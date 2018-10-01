import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* The title text of the site - usually the largest text.
*/
const Title = (props) => {
  const StyledTitle = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.titleTextColor };
    font-size: ${ props => props.theme.titleTextSize };
  `;

  return (
    <StyledTitle>
      {props.children}
    </StyledTitle>
  );
};

Title.propTypes = {
  /** The text to be displayed */
  children: PropTypes.string.isRequired,
};

/** @component */
export default Title;
