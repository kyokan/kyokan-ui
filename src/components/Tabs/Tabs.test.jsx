import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tabs from './Tabs';

configure({ adapter: new Adapter() });

describe('Tabs', () => {
  let mountedTabs;
  const content = 'Test Tabs';
  const tabs = () => {
    if (!mountedTabs) {
      mountedTabs = mount(
        <Tabs>{content}</Tabs>
      );
    }

    return mountedTabs;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = tabs().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
