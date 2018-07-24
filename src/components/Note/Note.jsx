import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Note = (props) => {
  const StyledNote = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledNote>
      {props.children}
    </StyledNote>
  );
};

Note.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Note;
