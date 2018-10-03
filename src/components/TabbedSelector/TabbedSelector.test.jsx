import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TabbedSelector from './TabbedSelector';

configure({ adapter: new Adapter() });

describe('TabbedSelector', () => {
  let mountedTabbedSelector;
  const content = 'Test TabbedSelector';
  const tabbedSelector = () => {
    if (!mountedTabbedSelector) {
      mountedTabbedSelector = mount(
        <TabbedSelector>{content}</TabbedSelector>
      );
    }

    return mountedTabbedSelector;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tabbedSelector().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
