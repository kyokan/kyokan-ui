import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HorizontalRule from './HorizontalRule';

configure({ adapter: new Adapter() });

describe('HorizontalRule', () => {
  let mountedHorizontalRule;
  const content = 'Test HorizontalRule';
  const horizontalRule = () => {
    if (!mountedHorizontalRule) {
      mountedHorizontalRule = mount(
        <HorizontalRule>{content}</HorizontalRule>
      );
    }

    return mountedHorizontalRule;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = horizontalRule().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
