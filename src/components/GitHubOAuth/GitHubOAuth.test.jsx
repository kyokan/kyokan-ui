import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GitHubOAuth from './GitHubOAuth';

configure({ adapter: new Adapter() });

describe('GitHubOAuth', () => {
  let mountedGitHubOAuth;
  const content = 'Test GitHubOAuth';
  const gitHubOAuth = () => {
    if (!mountedGitHubOAuth) {
      mountedGitHubOAuth = mount(
        <GitHubOAuth>{content}</GitHubOAuth>
      );
    }

    return mountedGitHubOAuth;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = gitHubOAuth().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
