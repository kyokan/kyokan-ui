import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DMLBalanceUpdate from './DMLBalanceUpdate';

configure({ adapter: new Adapter() });

describe('DMLBalanceUpdate', () => {
  let mountedDMLBalanceUpdate;
  const content = 'Test DMLBalanceUpdate';
  const dMLBalanceUpdate = () => {
    if (!mountedDMLBalanceUpdate) {
      mountedDMLBalanceUpdate = mount(
        <DMLBalanceUpdate>{content}</DMLBalanceUpdate>
      );
    }

    return mountedDMLBalanceUpdate;
  }

  beforeEach(() => {});

  it('always renders a div', () => {
    const divs = dMLBalanceUpdate().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
