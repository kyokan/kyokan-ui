import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RadioGroup from './RadioGroup';

configure({ adapter: new Adapter() });

describe('RadioGroup', () => {
  let mountedRadioGroup;
  const content = 'Test RadioGroup';
  const radioGroup = () => {
    if (!mountedRadioGroup) {
      mountedRadioGroup = mount(
        <RadioGroup>{content}</RadioGroup>
      );
    }

    return mountedRadioGroup;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = radioGroup().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
