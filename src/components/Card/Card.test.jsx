import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';

configure({ adapter: new Adapter() });

describe('Card', () => {
  let mountedCard;
  const content = 'Test Card';
  const card = () => {
    if (!mountedCard) {
      mountedCard = mount(
        <Card>{content}</Card>
      );
    }

    return mountedCard;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = card().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
