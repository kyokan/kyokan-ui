import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Title from './Title';

configure({ adapter: new Adapter() });

describe('Title', () => {
  let mountedTitle;
  const content = 'Test Title';
  const title = () => {
    if (!mountedTitle) {
      mountedTitle = mount(
        <Title>{content}</Title>
      );
    }

    return mountedTitle;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = title().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
