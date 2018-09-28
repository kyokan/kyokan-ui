import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  let mountedHeader;
  const content = 'Test Header';
  const header = () => {
    if (!mountedHeader) {
      mountedHeader = mount(
        <Header>{content}</Header>
      );
    }

    return mountedHeader;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = header().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
