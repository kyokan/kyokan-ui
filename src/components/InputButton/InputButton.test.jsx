import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputButton from './InputButton';

configure({ adapter: new Adapter() });

describe('InputButton', () => {
  let mountedInputButton;
  const content = 'Test InputButton';
  const inputButton = () => {
    if (!mountedInputButton) {
      mountedInputButton = mount(
        <InputButton>{content}</InputButton>
      );
    }

    return mountedInputButton;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = inputButton().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
