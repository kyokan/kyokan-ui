import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Description from './Description';

configure({ adapter: new Adapter() });

describe('Description', () => {
  let mountedDescription;
  const content = 'Test Description';
  const description = () => {
    if (!mountedDescription) {
      mountedDescription = mount(
        <Description>{content}</Description>
      );
    }

    return mountedDescription;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = description().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
