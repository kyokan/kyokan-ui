import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MultiSelect from './MultiSelect';

configure({ adapter: new Adapter() });

describe('MultiSelect', () => {
  let mountedMultiSelect;
  const content = 'Test MultiSelect';
  const multiSelect = () => {
    if (!mountedMultiSelect) {
      mountedMultiSelect = mount(
        <MultiSelect>{content}</MultiSelect>
      );
    }

    return mountedMultiSelect;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = multiSelect().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
