import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardList from './CardList';

configure({ adapter: new Adapter() });

describe('CardList', () => {
  let mountedCardList;
  const content = 'Test CardList';
  const cardList = () => {
    if (!mountedCardList) {
      mountedCardList = mount(
        <CardList>{content}</CardList>
      );
    }

    return mountedCardList;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = cardList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
