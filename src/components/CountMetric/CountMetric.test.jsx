import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CountMetric from './CountMetric';

configure({ adapter: new Adapter() });

describe('CountMetric', () => {
  let mountedCountMetric;
  const content = 'Test CountMetric';
  const countMetric = () => {
    if (!mountedCountMetric) {
      mountedCountMetric = mount(
        <CountMetric>{content}</CountMetric>
      );
    }

    return mountedCountMetric;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = countMetric().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
