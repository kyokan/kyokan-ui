import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Grid from './Grid';

configure({ adapter: new Adapter() });

describe('Grid', () => {
  let mountedGrid;
  const content = 'Test Grid';
  const grid = () => {
    if (!mountedGrid) {
      mountedGrid = mount(
        <Grid>{content}</Grid>
      );
    }

    return mountedGrid;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = grid().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
