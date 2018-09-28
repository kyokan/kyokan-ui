import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AvatarControl from './AvatarControl';

configure({ adapter: new Adapter() });

describe('AvatarControl', () => {
  let mountedAvatarControl;
  const content = 'Test AvatarControl';
  const avatarControl = () => {
    if (!mountedAvatarControl) {
      mountedAvatarControl = mount(
        <AvatarControl>{content}</AvatarControl>
      );
    }

    return mountedAvatarControl;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = avatarControl().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
