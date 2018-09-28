import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TagsCloud from './TagsCloud';

configure({ adapter: new Adapter() });

describe('TagsCloud', () => {
  let mountedTagsCloud;
  const content = 'Test TagsCloud';
  const tagsCloud = () => {
    if (!mountedTagsCloud) {
      mountedTagsCloud = mount(
        <TagsCloud>{content}</TagsCloud>
      );
    }

    return mountedTagsCloud;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tagsCloud().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
