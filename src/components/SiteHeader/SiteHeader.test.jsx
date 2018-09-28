import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SiteHeader from './SiteHeader';

configure({ adapter: new Adapter() });

describe('SiteHeader', () => {
  let mountedSiteHeader;
  const content = 'Test SiteHeader';
  const siteHeader = () => {
    if (!mountedSiteHeader) {
      mountedSiteHeader = mount(
        <SiteHeader>{content}</SiteHeader>
      );
    }

    return mountedSiteHeader;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = siteHeader().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
