import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OnboardingSidebar from './OnboardingSidebar';

configure({ adapter: new Adapter() });

describe('OnboardingSidebar', () => {
  let mountedOnboardingSidebar;
  const content = 'Test OnboardingSidebar';
  const onboardingSidebar = () => {
    if (!mountedOnboardingSidebar) {
      mountedOnboardingSidebar = mount(
        <OnboardingSidebar>{content}</OnboardingSidebar>
      );
    }

    return mountedOnboardingSidebar;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = onboardingSidebar().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
