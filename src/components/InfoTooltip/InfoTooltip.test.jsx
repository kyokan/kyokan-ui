import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InfoTooltip from './InfoTooltip';

configure({ adapter: new Adapter() });

describe('InfoTooltip', () => {
  let mountedInfoTooltip;
  const content = 'Test InfoTooltip';
  const infoTooltip = () => {
    if (!mountedInfoTooltip) {
      mountedInfoTooltip = mount(
        <InfoTooltip>{content}</InfoTooltip>
      );
    }

    return mountedInfoTooltip;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = infoTooltip().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
