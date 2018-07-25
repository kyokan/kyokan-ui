import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-weight : bold;
  font-family : sans-serif;
  font-size   : 14px;
  text-align  : center;
`;

const Link = styled.a`
  display         : inline-block;
  padding         : 10px 5px 0 5px;
  font-family     : sans-serif;
  text-decoration : none;
  cursor          : pointer;
  color           : #1978c8;
`;

const themes = [
  {
    name  : 'Default',
    value : 'default',
  },
  {
    name  : 'DML',
    value : 'dml',
  },
].map((theme) => {
  return (
    <Link
      key={theme.value}
      href="#"
      onClick={() => {
        setTheme(theme.value);
      }}
    >{theme.name}</Link>
  );
});

const setTheme = (themeValue) => {
  window.localStorage.setItem('styleGuideTheme', themeValue);
  window.location.reload();
};

export default class ThemeToggle extends Component {
  render() {
    return (
      <div>
        <Title>Kyokan UI Style Guide</Title>
        {themes}
      </div>
    );
  }
}
