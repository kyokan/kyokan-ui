import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextInput from './TextInput';

configure({ adapter: new Adapter() });

describe('TextInput', () => {
  let mountedTextInput;
  const content = 'Test TextInput';
  const textInput = () => {
    if (!mountedTextInput) {
      mountedTextInput = mount(
        <TextInput>{content}</TextInput>
      );
    }

    return mountedTextInput;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = textInput().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
