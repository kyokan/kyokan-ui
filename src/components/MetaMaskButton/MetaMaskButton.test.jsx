import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MetaMaskButton from './MetaMaskButton';

configure({ adapter: new Adapter() });

describe('MetaMaskButton', () => {
  let mountedMetaMaskButton;
  const content = 'Test MetaMaskButton';
  const metaMaskButton = () => {
    if (!mountedMetaMaskButton) {
      mountedMetaMaskButton = mount(
        <MetaMaskButton>{content}</MetaMaskButton>
      );
    }

    return mountedMetaMaskButton;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = metaMaskButton().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
