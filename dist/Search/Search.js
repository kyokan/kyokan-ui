import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* An input search bar.
*/
const Search = props => {
  const StyledSearch = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
  `;

  return React.createElement(StyledSearch, null);
};

Search.propTypes = {
  /** The text to be displayed when nothing has been typed into search bar */
  placeholder: PropTypes.string,

  /** A callback to execute while the user is typing */
  onKeyUp: PropTypes.func
};

/** @component */
export default Search;