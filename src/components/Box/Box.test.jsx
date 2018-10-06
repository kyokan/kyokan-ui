import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Box from './Box';

configure({ adapter: new Adapter() });

describe('Box', () => {
  let mountedBox;
  const content = 'Test Box';
  const box = () => {
    if (!mountedBox) {
      mountedBox = mount(
        <Box>{content}</Box>
      );
    }

    return mountedBox;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = box().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
