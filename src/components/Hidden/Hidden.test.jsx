import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Hidden from './Hidden';

configure({ adapter: new Adapter() });

describe('Hidden', () => {
  let mountedHidden;
  const content = 'Test Hidden';
  const hidden = () => {
    if (!mountedHidden) {
      mountedHidden = mount(
        <Hidden>{content}</Hidden>
      );
    }

    return mountedHidden;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = hidden().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
