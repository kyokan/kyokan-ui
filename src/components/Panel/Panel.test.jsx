import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from './Panel';

configure({ adapter: new Adapter() });

describe('Panel', () => {
  let mountedPanel;
  const content = 'Test Panel';
  const panel = () => {
    if (!mountedPanel) {
      mountedPanel = mount(
        <Panel>{content}</Panel>
      );
    }

    return mountedPanel;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = panel().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
