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
const OnboardingSidebar = (props) => {
  const StyledOnboardingSidebar = styled.div`
    font-family:      ${ (props) => props.theme.onboardingSidebarFontFamily };
    color:            ${ (props) => props.theme.onboardingSidebarTextColor };
    background-color: ${ (props) => props.theme.onboardingSidebarBackgroundColor};
    display: flex;
    flex-flow: column nowrap;
    width: 440px;
    padding: 3rem 4rem;
    flex: 0 0 auto;
  `;

  const StyledHeader = styled.div`
    font-size: 1.55rem;
    width: 270px;
    color: ${(props) => props.theme.onboardingSidebarTextColor};
    font-weight: 400;
    letter-spacing: 1px;
  `;

  const StyledSubheader = styled.div`
    color: ${(props) => props.theme.onboardingSidebarTextColor};
    opacity: .5;
    font-weight: 300;
    margin: 1.45rem 0 .5rem;
    font-size: 0.75rem;
    letter-spacing: 0.8px;
  `;

  const StyledDescription = styled.div`
    color: ${(props) => props.theme.onboardingSidebarTextColor};
    opacity: .6;
    font-weight: 300;
    margin: 0.8rem 0 2.6rem;
    font-size: 0.9rem;
    letter-spacing: 0.8px;
    line-height: 1.8rem;
    width: 270px;
  `;

  return (
    <StyledOnboardingSidebar
      className={props.className}
    >
      <StyledImageWrapper>
        <img
          src={props.logoUrl}
          className={props.logoClassName}
          alt="Logo"
        />
      </StyledImageWrapper>
      <StyledSidebarContentWrapper>
        <img
          className={props.iconClassName}
          src={props.iconUrl}
          alt="Icon"
        />
        <StyledSubheader>{props.subheaderText}</StyledSubheader>
        <StyledHeader>{props.headerText}</StyledHeader>
        <StyledDescription>{props.descriptionText}</StyledDescription>
        <StyledSidebarProgressWrapper>
          {
            Array(props.totalSteps).fill(0).map((n, i) => {
              if (i <= props.currentStepIndex) {
                return (
                  <StyledFullProgressBar
                    key={`step-${i}`}
                  />
                );
              } else {
                return (
                  <StyledEmptyProgressBar
                    key={`step-${i}`}
                  />
                );
              }
            })
          }
        </StyledSidebarProgressWrapper>
      </StyledSidebarContentWrapper>
    </StyledOnboardingSidebar>
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
  totalSteps: PropTypes.number,
};

OnboardingSidebar.defaultProps = {
  subheaderText: '',
  headerText: '',
  descriptionText: '',
  logoUrl: '',
  logoClassName: '',
  className: '',
  iconUrl: '',
  iconClassName: '',
};

/** @component */
export default OnboardingSidebar;
