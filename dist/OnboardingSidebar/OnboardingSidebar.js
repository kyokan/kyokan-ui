import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImageWrapper = styled.div`
  flex: 0 0 auto;
  height: 310px;
  text-align: left;
  justify-content: flex-start;
  display: flex;
  flex-flow: column nowrap;
`;

const StyledSidebarContentWrapper = styled.div`
  flex: 1 0 auto;
`;

const StyledSidebarProgressWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const StyledEmptyProgressBar = styled.div`
    height: 4px;
    width: 44px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.5);
    margin-right: 1.4rem;
`;

const StyledFullProgressBar = styled.div`
    height: 4px;
    width: 44px;
    border-radius: 2px;
    background-color: rgb(255, 255, 255);
    margin-right: 1.4rem;
`;

/**
* [Description]
*/
const OnboardingSidebar = props => {
  const StyledOnboardingSidebar = styled.div`
    font-family: ${props => props.theme.textFontFamily};
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.sidebarBackgroundColor};
    display: flex;
    flex-flow: column nowrap;
    width: 440px;
    padding: 3rem 4rem;
    flex: 0 0 auto;
  `;

  const StyledHeader = styled.div`
    font-size: 1.55rem;
    width: 270px;
    color: ${props => props.theme.sidebarTextColor};
    font-weight: 400;
    letter-spacing: 1px;
  `;

  const StyledSubheader = styled.div`
    color: ${props => props.theme.sidebarTextColor};
    opacity: .5;
    font-weight: 300;
    margin: 1.45rem 0 .5rem;
    font-size: 0.75rem;
    letter-spacing: 0.8px;
  `;

  const StyledDescription = styled.div`
    color: ${props => props.theme.sidebarTextColor};
    opacity: .6;
    font-weight: 300;
    margin: 0.8rem 0 2.6rem;
    font-size: 0.9rem;
    letter-spacing: 0.8px;
    line-height: 1.8rem;
    width: 270px;
  `;

  return React.createElement(
    StyledOnboardingSidebar,
    { className: props.className },
    React.createElement(
      StyledImageWrapper,
      null,
      React.createElement('img', { src: props.logoUrl, className: props.logoClassName })
    ),
    React.createElement(
      StyledSidebarContentWrapper,
      null,
      React.createElement('img', { className: props.iconClassName, src: props.iconUrl }),
      React.createElement(
        StyledSubheader,
        null,
        props.subheaderText
      ),
      React.createElement(
        StyledHeader,
        null,
        props.headerText
      ),
      React.createElement(
        StyledDescription,
        null,
        props.descriptionText
      ),
      React.createElement(
        StyledSidebarProgressWrapper,
        null,
        Array(props.totalSteps).fill(0).map((n, i) => i <= props.currentStepIndex ? React.createElement(StyledFullProgressBar, null) : React.createElement(StyledEmptyProgressBar, null))
      )
    )
  );
};

OnboardingSidebar.propTypes = {
  subheaderText: PropTypes.string,
  headerText: PropTypes.string,
  descriptionText: PropTypes.string,
  className: PropTypes.string,
  iconUrl: PropTypes.string,
  iconClassName: PropTypes.string,
  logoUrl: PropTypes.string,
  logoClassName: PropTypes.string,
  currentStepIndex: PropTypes.number,
  totalSteps: PropTypes.number
};

OnboardingSidebar.defaultProps = {
  subheaderText: '',
  headerText: '',
  descriptionText: '',
  logoUrl: '',
  logoClassName: '',
  className: '',
  iconUrl: '',
  iconClassName: ''
};

/** @component */
export default OnboardingSidebar;