import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DMLAlgorithm from './DMLAlgorithm';

configure({ adapter: new Adapter() });

describe('DMLAlgorithm', () => {
  let mountedDMLAlgorithm;
  const content = 'Test DMLAlgorithm';
  const dMLAlgorithm = () => {
    if (!mountedDMLAlgorithm) {
      mountedDMLAlgorithm = mount(
        <DMLAlgorithm>{content}</DMLAlgorithm>
      );
    }

    return mountedDMLAlgorithm;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = dMLAlgorithm().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
