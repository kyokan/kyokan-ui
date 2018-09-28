import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TokenButton from './TokenButton';

configure({ adapter: new Adapter() });

describe('TokenButton', () => {
  let mountedTokenButton;
  const content = 'Test TokenButton';
  const tokenButton = () => {
    if (!mountedTokenButton) {
      mountedTokenButton = mount(
        <TokenButton>{content}</TokenButton>
      );
    }

    return mountedTokenButton;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tokenButton().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
