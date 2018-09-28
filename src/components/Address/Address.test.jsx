import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Address from './Address';

configure({ adapter: new Adapter() });

describe('Address', () => {
  let mountedAddress;
  const content = 'Test Address';
  const address = () => {
    if (!mountedAddress) {
      mountedAddress = mount(
        <Address>{content}</Address>
      );
    }

    return mountedAddress;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = address().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
