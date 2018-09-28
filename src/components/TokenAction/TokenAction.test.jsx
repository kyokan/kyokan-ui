import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TokenAction from './TokenAction';

configure({ adapter: new Adapter() });

describe('TokenAction', () => {
  let mountedTokenAction;
  const content = 'Test TokenAction';
  const tokenAction = () => {
    if (!mountedTokenAction) {
      mountedTokenAction = mount(
        <TokenAction>{content}</TokenAction>
      );
    }

    return mountedTokenAction;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tokenAction().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
