import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TabbedRadioGroup from './TabbedRadioGroup';

configure({ adapter: new Adapter() });

describe('TabbedRadioGroup', () => {
  let mountedTabbedRadioGroup;
  const content = 'Test TabbedRadioGroup';
  const tabbedRadioGroup = () => {
    if (!mountedTabbedRadioGroup) {
      mountedTabbedRadioGroup = mount(
        <TabbedRadioGroup>{content}</TabbedRadioGroup>
      );
    }

    return mountedTabbedRadioGroup;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tabbedRadioGroup().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
