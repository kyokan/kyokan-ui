import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FacebookOAuth from './FacebookOAuth';

configure({ adapter: new Adapter() });

describe('FacebookOAuth', () => {
  let mountedFacebookOAuth;
  const content = 'Test FacebookOAuth';
  const facebookOAuth = () => {
    if (!mountedFacebookOAuth) {
      mountedFacebookOAuth = mount(
        <FacebookOAuth>{content}</FacebookOAuth>
      );
    }

    return mountedFacebookOAuth;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = facebookOAuth().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
