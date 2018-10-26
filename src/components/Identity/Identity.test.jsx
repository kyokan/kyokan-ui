import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Identity from './Identity';

configure({ adapter: new Adapter() });

describe('Identity', () => {
  let mountedIdentity;
  const content = 'Test Identity';
  const identity = () => {
    if (!mountedIdentity) {
      mountedIdentity = mount(
        <Identity>{content}</Identity>
      );
    }

    return mountedIdentity;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = identity().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
