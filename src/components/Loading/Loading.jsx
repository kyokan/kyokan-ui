import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Loading = (props) => {
  const StyledLoading = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledLoading
      text=""
      icon=""
    >

    </StyledLoading>
  );
};

Loading.propTypes = {
  /** The text to display while loading */
  text: PropTypes.any,

  /** An icon to display while loading */
  icon: PropTypes.any,
};

/** @component */
export default Loading;
