import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Icon from './Icon';

configure({ adapter: new Adapter() });

describe('Icon', () => {
  let mountedIcon;
  const content = 'Test Icon';
  const icon = () => {
    if (!mountedIcon) {
      mountedIcon = mount(
        <Icon>{content}</Icon>
      );
    }

    return mountedIcon;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = icon().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
