import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TabbedRadioGroupOption from './TabbedRadioGroupOption';

configure({ adapter: new Adapter() });

describe('TabbedRadioGroupOption', () => {
  let mountedTabbedRadioGroupOption;
  const content = 'Test TabbedRadioGroupOption';
  const tabbedRadioGroupOption = () => {
    if (!mountedTabbedRadioGroupOption) {
      mountedTabbedRadioGroupOption = mount(
        <TabbedRadioGroupOption>{content}</TabbedRadioGroupOption>
      );
    }

    return mountedTabbedRadioGroupOption;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tabbedRadioGroupOption().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
