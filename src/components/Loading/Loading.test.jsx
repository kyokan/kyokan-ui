import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from './Loading';

configure({ adapter: new Adapter() });

describe('Loading', () => {
  let mountedLoading;
  const content = 'Test Loading';
  const loading = () => {
    if (!mountedLoading) {
      mountedLoading = mount(
        <Loading>{content}</Loading>
      );
    }

    return mountedLoading;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = loading().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
