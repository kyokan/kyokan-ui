import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TagsInput from './TagsInput';

configure({ adapter: new Adapter() });

describe('TagsInput', () => {
  let mountedTagsInput;
  const content = 'Test TagsInput';
  const tagsInput = () => {
    if (!mountedTagsInput) {
      mountedTagsInput = mount(
        <TagsInput>{content}</TagsInput>
      );
    }

    return mountedTagsInput;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tagsInput().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
