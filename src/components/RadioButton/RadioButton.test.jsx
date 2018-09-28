import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RadioButton from './RadioButton';

configure({ adapter: new Adapter() });

describe('RadioButton', () => {
  let mountedRadioButton;
  const content = 'Test RadioButton';
  const radioButton = () => {
    if (!mountedRadioButton) {
      mountedRadioButton = mount(
        <RadioButton>{content}</RadioButton>
      );
    }

    return mountedRadioButton;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = radioButton().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
