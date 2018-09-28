import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Status from './Status';

configure({ adapter: new Adapter() });

describe('Status', () => {
  let mountedStatus;
  const content = 'Test Status';
  const status = () => {
    if (!mountedStatus) {
      mountedStatus = mount(
        <Status>{content}</Status>
      );
    }

    return mountedStatus;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = status().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
