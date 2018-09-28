import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Dropdown from './Dropdown';

configure({ adapter: new Adapter() });

describe('Dropdown', () => {
  let mountedDropdown;
  const content = 'Test Dropdown';
  const dropdown = () => {
    if (!mountedDropdown) {
      mountedDropdown = mount(
        <Dropdown>{content}</Dropdown>
      );
    }

    return mountedDropdown;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = dropdown().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
