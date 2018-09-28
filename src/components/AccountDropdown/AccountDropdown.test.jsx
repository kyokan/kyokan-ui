import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AccountDropdown from './AccountDropdown';

configure({ adapter: new Adapter() });

describe('AccountDropdown', () => {
  let mountedAccountDropdown;
  const content = 'Test AccountDropdown';
  const accountDropdown = () => {
    if (!mountedAccountDropdown) {
      mountedAccountDropdown = mount(
        <AccountDropdown>{content}</AccountDropdown>
      );
    }

    return mountedAccountDropdown;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = accountDropdown().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
