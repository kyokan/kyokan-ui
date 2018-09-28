import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Accordion from './Accordion';

configure({ adapter: new Adapter() });

describe('Accordion', () => {
  let mountedAccordion;
  const content = 'Test Accordion';
  const accordion = () => {
    if (!mountedAccordion) {
      mountedAccordion = mount(
        <Accordion>{content}</Accordion>
      );
    }

    return mountedAccordion;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = accordion().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
