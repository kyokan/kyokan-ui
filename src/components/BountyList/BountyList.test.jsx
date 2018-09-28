import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BountyList from './BountyList';

configure({ adapter: new Adapter() });

describe('BountyList', () => {
  let mountedBountyList;
  const content = 'Test BountyList';
  const bountyList = () => {
    if (!mountedBountyList) {
      mountedBountyList = mount(
        <BountyList>{content}</BountyList>
      );
    }

    return mountedBountyList;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = bountyList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
