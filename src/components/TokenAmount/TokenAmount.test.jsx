import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TokenAmount from './TokenAmount';

configure({ adapter: new Adapter() });

describe('TokenAmount', () => {
  let mountedTokenAmount;
  const content = 'Test TokenAmount';
  const tokenAmount = () => {
    if (!mountedTokenAmount) {
      mountedTokenAmount = mount(
        <TokenAmount>{content}</TokenAmount>
      );
    }

    return mountedTokenAmount;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tokenAmount().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
