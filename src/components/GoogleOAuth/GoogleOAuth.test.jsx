import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GoogleOAuth from './GoogleOAuth';

configure({ adapter: new Adapter() });

describe('GoogleOAuth', () => {
  let mountedGoogleOAuth;
  const content = 'Test GoogleOAuth';
  const googleOAuth = () => {
    if (!mountedGoogleOAuth) {
      mountedGoogleOAuth = mount(
        <GoogleOAuth>{content}</GoogleOAuth>
      );
    }

    return mountedGoogleOAuth;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = googleOAuth().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
