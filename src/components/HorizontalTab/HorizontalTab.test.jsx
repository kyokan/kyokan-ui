import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HorizontalTab from './HorizontalTab';

configure({ adapter: new Adapter() });

describe('HorizontalTab', () => {
  let mountedHorizontalTab;
  const content = 'Test HorizontalTab';
  const horizontalTab = () => {
    if (!mountedHorizontalTab) {
      mountedHorizontalTab = mount(
        <HorizontalTab>{content}</HorizontalTab>
      );
    }

    return mountedHorizontalTab;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = horizontalTab().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
