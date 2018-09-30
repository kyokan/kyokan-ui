import React, { Component } from 'react';
import styled from 'styled-components';

const Link = styled.div`
  display         : inline-block;
  padding         : 10px 5px 0 5px;
  font-family     : sans-serif;
  text-decoration : none;
  cursor          : pointer;
  color           : #1978c8;

  &.active {
    font-weight: bold;
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
const DEFAULT_THEME = THEMES[1];

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

  getThemes = () => {
    return (
      THEMES.map((theme) => {
        const isActive    = (this.state.currentTheme === theme.value);
        const classes     = (isActive ? 'active' : '');
        const displayName = (isActive ? `[${theme.name}]` : theme.name);

        return (
          <Link
            className={classes}
            key={theme.value}
            onClick={() => {
              this.setTheme(theme.value);
            }}
          >
            {displayName}
          </Link>
        )
      })
    );
  }

  render() {
    return (
      <div>
        <div id="styleguide-title">
          <Link
            onClick={() => {
              window.location.replace('#');
            }}
          >
            Kyokan UI Style Guide
          </Link>
        </div>

        <div id="theme-toggle">
          <span>Theme: </span>
          {this.getThemes()}
        </div>
      </div>
    );
  }
}

export default ThemeToggle;
