import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from './Content';

configure({ adapter: new Adapter() });

describe('Content', () => {
  let mountedContent;
  const content = 'Test Content';
  const content = () => {
    if (!mountedContent) {
      mountedContent = mount(
        <Content>{content}</Content>
      );
    }

    return mountedContent;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = content().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
