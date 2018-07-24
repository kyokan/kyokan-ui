import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* [Description]
*/
const Modal = (props) => {
  const StyledModal = styled.div`
    color: ${ (props) => props.theme.primaryColor };
  `;

  return (
    <StyledModal>
      {props.children}
    </StyledModal>
  );
};

Modal.propTypes = {
  /** [Prop description] */
  children: PropTypes.any.isRequired,
};

/** @component */
export default Modal;
