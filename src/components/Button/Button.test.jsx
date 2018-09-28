import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

configure({ adapter: new Adapter() });

describe('Button', () => {
  let mountedButton;
  const content = 'Test Button';
  const button = () => {
    if (!mountedButton) {
      mountedButton = mount(
        <Button>{content}</Button>
      );
    }

    return mountedButton;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = button().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
