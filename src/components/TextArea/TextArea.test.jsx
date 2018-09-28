import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextArea from './TextArea';

configure({ adapter: new Adapter() });

describe('TextArea', () => {
  let mountedTextArea;
  const content = 'Test TextArea';
  const textArea = () => {
    if (!mountedTextArea) {
      mountedTextArea = mount(
        <TextArea>{content}</TextArea>
      );
    }

    return mountedTextArea;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = textArea().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
