import React from 'react';
import styled from 'styled-components';

/**
* [Description]
*/
const Modal = (props) => {
  const StyledModal = styled.div`
    font-family : ${ ({ theme }) => theme.modalFontFamily };
    color       : ${ ({ theme }) => theme.modalColor };
  `;

  return (
    <StyledModal>

    </StyledModal>
  );
};

Modal.propTypes = {

};

/** @component */
export default Modal;
