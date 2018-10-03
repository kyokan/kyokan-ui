import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TabbedSelectorOption from './TabbedSelectorOption';

configure({ adapter: new Adapter() });

describe('TabbedSelectorOption', () => {
  let mountedTabbedSelectorOption;
  const content = 'Test TabbedSelectorOption';
  const tabbedSelectorOption = () => {
    if (!mountedTabbedSelectorOption) {
      mountedTabbedSelectorOption = mount(
        <TabbedSelectorOption>{content}</TabbedSelectorOption>
      );
    }

    return mountedTabbedSelectorOption;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tabbedSelectorOption().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
