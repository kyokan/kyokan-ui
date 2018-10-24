import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
* A tab that will be toggled from a horizontal control.
*/
const HorizontalTab = (props) => {
  const StyledHorizontalTab = styled.div`
    font-family : ${ ({ theme }) => theme.horizontalTabFontFamily };
    color       : ${ ({ theme }) => theme.horizontalTabColor };
  `;

  return (
    <StyledHorizontalTab>
      {props.children}
    </StyledHorizontalTab>
  );
};

HorizontalTab.defaultProps = {
  icon       : '',
  onTabClick : () => {},
};

HorizontalTab.propTypes = {
  /** The content of the tab */
  children: PropTypes.any.isRequired,

  /** The icon for the tab (rendered by `Tabs`) */
  icon: PropTypes.string,

  /** A callback that will be fired when user clicks the tab (fired by `Tabs`) */
  onTabClick: PropTypes.func,

  /** The title of the tab */
  title: PropTypes.string.isRequired,
};

/** @component */
export default HorizontalTab;
