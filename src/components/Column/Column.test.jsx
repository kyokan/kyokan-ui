import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Column from './Column';

configure({ adapter: new Adapter() });

describe('Column', () => {
  let mountedColumn;
  const content = 'Test Column';
  const column = () => {
    if (!mountedColumn) {
      mountedColumn = mount(
        <Column>{content}</Column>
      );
    }

    return mountedColumn;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = column().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
