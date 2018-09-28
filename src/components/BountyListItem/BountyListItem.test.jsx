import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BountyListItem from './BountyListItem';

configure({ adapter: new Adapter() });

describe('BountyListItem', () => {
  let mountedBountyListItem;
  const content = 'Test BountyListItem';
  const bountyListItem = () => {
    if (!mountedBountyListItem) {
      mountedBountyListItem = mount(
        <BountyListItem>{content}</BountyListItem>
      );
    }

    return mountedBountyListItem;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = bountyListItem().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
