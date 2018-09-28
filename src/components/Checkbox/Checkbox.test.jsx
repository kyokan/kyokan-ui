import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Checkbox from './Checkbox';

configure({ adapter: new Adapter() });

describe('Checkbox', () => {
  let mountedCheckbox;
  const content = 'Test Checkbox';
  const checkbox = () => {
    if (!mountedCheckbox) {
      mountedCheckbox = mount(
        <Checkbox>{content}</Checkbox>
      );
    }

    return mountedCheckbox;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = checkbox().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
