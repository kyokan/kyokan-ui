import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TagsDropdown from './TagsDropdown';

configure({ adapter: new Adapter() });

describe('TagsDropdown', () => {
  let mountedTagsDropdown;
  const content = 'Test TagsDropdown';
  const tagsDropdown = () => {
    if (!mountedTagsDropdown) {
      mountedTagsDropdown = mount(
        <TagsDropdown>{content}</TagsDropdown>
      );
    }

    return mountedTagsDropdown;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tagsDropdown().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
