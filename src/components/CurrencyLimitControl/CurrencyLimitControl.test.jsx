import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrencyLimitControl from './CurrencyLimitControl';

configure({ adapter: new Adapter() });

describe('CurrencyLimitControl', () => {
    let mountedCurrencyLimitControl;
    const content = 'Test CurrencyLimitControl';
    const currencyLimitControl = () => {
        if (!mountedCurrencyLimitControl) {
            mountedCurrencyLimitControl = mount(
                <CurrencyLimitControl>{content}</CurrencyLimitControl>
            );
        }

        return mountedCurrencyLimitControl;
    }

    beforeEach(() => {});

    it('always renders a div', () => {
        const divs = currencyLimitControl().find('div');
        expect(divs.length).toBeGreaterThan(0);
    });
});
