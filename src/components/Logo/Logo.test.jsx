import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Logo from './Logo';

configure({ adapter: new Adapter() });

describe('Logo', () => {
  let mountedLogo;
  const content = 'Test Logo';
  const logo = () => {
    if (!mountedLogo) {
      mountedLogo = mount(
        <Logo>{content}</Logo>
      );
    }

    return mountedLogo;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = logo().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
