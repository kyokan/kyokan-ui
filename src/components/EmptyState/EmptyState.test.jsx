import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EmptyState from './EmptyState';

configure({ adapter: new Adapter() });

describe('EmptyState', () => {
  let mountedEmptyState;
  const content = 'Test EmptyState';
  const emptyState = () => {
    if (!mountedEmptyState) {
      mountedEmptyState = mount(
        <EmptyState>{content}</EmptyState>
      );
    }

    return mountedEmptyState;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = emptyState().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
