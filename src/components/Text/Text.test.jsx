import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Text from './Text';

configure({ adapter: new Adapter() });

describe('Text', () => {
  let mountedText;
  const content = 'Test Text';
  const text = () => {
    if (!mountedText) {
      mountedText = mount(
        <Text>{content}</Text>
      );
    }

    return mountedText;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = text().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
