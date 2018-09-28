import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tag from './Tag';

configure({ adapter: new Adapter() });

describe('Tag', () => {
  let mountedTag;
  const content = 'Test Tag';
  const tag = () => {
    if (!mountedTag) {
      mountedTag = mount(
        <Tag>{content}</Tag>
      );
    }

    return mountedTag;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tag().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
