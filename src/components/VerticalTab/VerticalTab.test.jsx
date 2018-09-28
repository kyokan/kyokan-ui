import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VerticalTab from './VerticalTab';

configure({ adapter: new Adapter() });

describe('VerticalTab', () => {
  let mountedVerticalTab;
  const content = 'Test VerticalTab';
  const verticalTab = () => {
    if (!mountedVerticalTab) {
      mountedVerticalTab = mount(
        <VerticalTab>{content}</VerticalTab>
      );
    }

    return mountedVerticalTab;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = verticalTab().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
