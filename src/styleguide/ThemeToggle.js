import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSiteHeader = styled.a`
  display         : inline-block;
  padding         : 10px 5px 0 5px;
  font-family     : sans-serif;
  text-decoration : none;
  cursor          : pointer;
  color           : #1978c8;

  &:hover {
    text-decoration: underline;
  }
`;

const THEMES = [
  {
    name  : 'Default',
    value : 'default',
  },
  {
    name  : 'DML',
    value : 'dml',
  },
];
const DEFAULT_THEME = THEMES[0];

class ThemeToggle extends Component {
  constructor (props) {
    super(props);

    const theme = window.localStorage.getItem('styleGuideTheme');

    if (!theme) {
      this.setTheme(DEFAULT_THEME.value);
    }

    this.state = {
      currentTheme: theme,
    }
  }

  setTheme = (themeValue) => {
    window.localStorage.setItem('styleGuideTheme', themeValue);
    window.location.reload();
  };

  renderThemes = () => {
    return (
      <select
        defaultValue={this.state.currentTheme}
        onChange={(event) => {
          this.setTheme(event.target.value);
        }}
      >
        {
          THEMES.map((theme) => {
            return (
              <option
                key={theme.value}
                value={theme.value}
              >
                {theme.name}
              </option>
            )
          })
        }
      </select>
    );
  }

  render() {
    return (
      <div>
        <div id="styleguide-title">
          <StyledSiteHeader
            href="#"
          >
            Kyokan UI Style Guide
          </StyledSiteHeader>
        </div>

        <div id="theme-toggle">
          <span>Theme: </span>
          {this.renderThemes()}
        </div>
      </div>
    );
  }
}

export default ThemeToggle;
