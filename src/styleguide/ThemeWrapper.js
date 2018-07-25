import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import DefaultTheme from '../themes/DefaultTheme';
import DMLTheme from '../themes/DMLTheme';

const themes = {
  default : DefaultTheme,
  dml     : DMLTheme,
}

const theme = window.localStorage.getItem('styleGuideTheme') || 'default';

export default class ThemeWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={themes[theme]}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
