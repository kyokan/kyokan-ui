import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import DefaultTheme from '../themes/default';
import DMLTheme from '../themes/DML';

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
