import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A module to show while loading page elements.
*/
const Loading = (props) => {
  const StyledLoading = styled.div`
    font-family: ${ (props) => props.theme.textFontFamily };
    color: ${ (props) => props.theme.textColor };
  `;

  return (
    <StyledLoading>
      
    </StyledLoading>
  );
};

Loading.propTypes = {
  /** The text to display while loading */
  text: PropTypes.string,

  /** An icon to display while loading */
  icon: PropTypes.string,
};

/** @component */
export default Loading;
