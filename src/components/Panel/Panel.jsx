import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A block of content, almost like an inline modal.
*/
const Panel = (props) => {
  const StyledPanel = styled.div`
    font-family:      ${ (props) => props.theme.panelFontFamily };
    color:            ${ (props) => props.theme.panelTextColor };
    background-color: ${ (props) => props.theme.panelBackgroundColor };
    border-radius:    ${ (props) => props.theme.panelBorderRadius };
    box-shadow:       ${ (props) => props.theme.panelBoxShadow };
  `;

  return (
    <StyledPanel className={props.className}>
      {props.children}
    </StyledPanel>
  );
};

Panel.propTypes = {
  /** Any content */
  children: PropTypes.any.isRequired,

  /** A classname to add to the element */
  className: PropTypes.string,
};

Panel.defaultProps = {
  className: '',
};

/** @component */
export default Panel;
