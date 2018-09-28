import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Search = (props) => {
  const StyledSearch = styled.div`
    font-family: ${ (props) => props.theme.fontFamily };
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledSearch
      placeholder=""
      onKeyUp=""
    >

    </StyledSearch>
  );
};

Search.propTypes = {
  /** The text to be displayed when nothing has been typed into search bar */
  placeholder: PropTypes.any,

  /** A callback function to execute while the user is typing */
  onKeyUp: PropTypes.any,
};

/** @component */
export default Search;
