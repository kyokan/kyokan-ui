import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Sorter from './Sorter';

configure({ adapter: new Adapter() });

describe('Sorter', () => {
  let mountedSorter;
  const content = 'Test Sorter';
  const sorter = () => {
    if (!mountedSorter) {
      mountedSorter = mount(
        <Sorter>{content}</Sorter>
      );
    }

    return mountedSorter;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = sorter().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
