import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Select from './Select';

configure({ adapter: new Adapter() });

describe('Select', () => {
  let mountedSelect;
  const content = 'Test Select';
  const select = () => {
    if (!mountedSelect) {
      mountedSelect = mount(
        <Select>{content}</Select>
      );
    }

    return mountedSelect;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = select().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
