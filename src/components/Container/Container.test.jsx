import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Container from './Container';

configure({ adapter: new Adapter() });

describe('Container', () => {
  let mountedContainer;
  const content = 'Test Container';
  const container = () => {
    if (!mountedContainer) {
      mountedContainer = mount(
        <Container>{content}</Container>
      );
    }

    return mountedContainer;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = container().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
