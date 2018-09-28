import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from './Search';

configure({ adapter: new Adapter() });

describe('Search', () => {
  let mountedSearch;
  const content = 'Test Search';
  const search = () => {
    if (!mountedSearch) {
      mountedSearch = mount(
        <Search>{content}</Search>
      );
    }

    return mountedSearch;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = search().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
