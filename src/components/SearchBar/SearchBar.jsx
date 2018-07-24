import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const SearchBar = (props) => {
  const StyledSearchBar = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledSearchBar>
      {props.children}
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default SearchBar;
