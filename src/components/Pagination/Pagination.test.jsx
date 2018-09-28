import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pagination from './Pagination';

configure({ adapter: new Adapter() });

describe('Pagination', () => {
  let mountedPagination;
  const content = 'Test Pagination';
  const pagination = () => {
    if (!mountedPagination) {
      mountedPagination = mount(
        <Pagination>{content}</Pagination>
      );
    }

    return mountedPagination;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = pagination().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
