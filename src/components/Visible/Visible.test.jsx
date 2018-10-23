import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Visible from './Visible';

configure({ adapter: new Adapter() });

describe('Visible', () => {
  let mountedVisible;
  const content = 'Test Visible';
  const visible = () => {
    if (!mountedVisible) {
      mountedVisible = mount(
        <Visible>{content}</Visible>
      );
    }

    return mountedVisible;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = visible().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
